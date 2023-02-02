import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import { BsSearch } from "react-icons/bs";
import "./styles/RegistroHorario.css";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import { useForm, Controller } from "react-hook-form";
import moment from "moment";
import axios from "axios";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { Inicio } from "./Inicio";
import { UserContext } from "./user/UserContext";

function RegistroHorario() {
  const [show, setShow] = useState(false);
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);
  const [imgDir, setImgDir] = useState(null);
  const [entries, setEntries] = useState([]);
  const [refresh, setRefresh] = useState(true);
  const [search, setSearch] = useState("");
  const [cedulasearch, setCedulaSearch] = useState("");
  const [typeSearcher, setTypeSearcher] = useState("nombres");
  const [startDate, setStartDate] = useState(new Date());
  const {
    user: { user },
  } = useContext(UserContext);
  console.log(user);

  const getEntries = async () => {
    const res = await axios.get("/api/data");
    setEntries(res.data);
  };

  useEffect(() => {
    getEntries();
  }, [refresh]);

  const searcher = (e) => {
    setSearch(e.target.value);
  };

  const cedulasearcher = (e) => {
    setCedulaSearch(e.target.value);
  };

  const typesearcher = (e) => {
    setTypeSearcher(e.target.value);
  };

  let results = [];
  if (!search) {
    results = entries;
  } else {
    if (typeSearcher === "nombres") {
      results = entries.filter((dato) =>
        dato.nombres.toLowerCase().includes(search.toLocaleLowerCase())
      );
    }

    if (typeSearcher === "cedula") {
      results = entries.filter((dato) =>
        dato.ci.toLowerCase().includes(search.toLocaleLowerCase())
      );
    }

    if (typeSearcher === "empresa") {
      results = entries.filter((dato) =>
        dato.empresa.toLowerCase().includes(search.toLocaleLowerCase())
      );
    }

    if (typeSearcher === "direccion") {
      results = entries.filter((dato) =>
        dato.direccion.toLowerCase().includes(search.toLocaleLowerCase())
      );
    }

    if (typeSearcher === "fecha") {
      results = entries.filter((dato) =>
        moment(dato.diaentrada).isSame(search)
      );
    }
  }

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot({
      width: 140,
      height: 160,
    });
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleRefresh = () => setRefresh(!refresh);

  const { register, handleSubmit, control, reset, setValue } = useForm();

  let result = [];
  const onSearch = () => {
    if (cedulasearch)
      result = results.find((resultado) =>
        resultado.ci.toLowerCase().includes(cedulasearch.toLocaleLowerCase())
      );
    console.log(result);
    setValue("nombres", result.nombres);
    setValue("ci", result.ci);
    setValue("telefono", result.telefono);
    setImgDir(result.foto);
    setValue("foto", result.foto);
    setImgSrc(`/uploads/${result.foto}`);
    setCedulaSearch("");
  };
  const submitPhoto = async () => {
    const url = imgSrc;

    const nBlob = await fetch(url)
      .then((res) => res.blob())
      .then((blob) => blob);

    console.log(nBlob);

    const formData = new FormData();
    formData.append("image", nBlob, "image.jpeg");

    try {
      const res = await axios.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      await setImgDir(res.data);
    } catch (err) {
      if (err.response.status === 500) {
        console.log("There was a problem with the server");
      } else {
        console.log(err.response.data.msg);
      }
    }
  };

  const onSubmit = async (data) => {
    console.log(data);
    console.log(imgDir);
    const diaActual = moment().format("YYYY-MM-DD");
    const horaActual = moment().format("HH:mm");
    const { nombres, ci, telefono, empresa, direccion, observaciones } = data;
    console.log(user);
    await axios
      .post("/api/register", {
        nombres,
        ci,
        telefono,
        empresa,
        direccion,
        observaciones,
        foto: imgDir,
        diaentrada: diaActual,
        horaentrada: horaActual,
        registrado: user,
      })
      .then(() => {
        alert("Entrada registrada exitosamente");
        handleClose();
        handleRefresh();
        reset();
        setImgSrc(null);
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <h3>Registro de Entrada de la Corporación Venezolana de Minería</h3>
      <Inicio />
      <Container id="btn-container">
        <InputGroup className="mb-3" id="input-buscar">
          <InputGroup.Text id="basic-addon1">
            <BsSearch />
          </InputGroup.Text>
          <Form.Control
            placeholder="Buscar"
            aria-label="Buscar"
            aria-describedby="basic-addon1"
            value={search}
            onChange={searcher}
          />
        </InputGroup>
        <h5 id="text-search">Buscar por:</h5>
        <Form.Select id="btn-searchtypes" onChange={typesearcher}>
          <option value="nombres" default>
            Nombres
          </option>
          <option value="cedula">Cédula</option>
          <option value="empresa">Empresa</option>
          <option value="direccion">Dirección</option>
          <option value="fecha">Fecha</option>
        </Form.Select>
        {typeSearcher === "fecha" && (
          <DatePicker
            selected={startDate}
            onChange={(date) => {
              setStartDate(date);
            }}
            onSelect={(date) => setSearch(moment(date).format("YYYY-MM-DD"))}
            id="datepicker"
          />
        )}
        <Container id="btns-container">
          <Button
            variant="success"
            id="btn-agregarregistro"
            onClick={handleShow}
          >
            Agregar Registro
          </Button>
        </Container>
      </Container>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton id="modal-header">
          <Modal.Title>Añadir registro</Modal.Title>
          <Container id="bs-search">
            <InputGroup className="mb-3" id="input-cedulabuscar">
              <Form.Control
                placeholder="Buscar por cédula"
                aria-label="Buscar por cédula"
                aria-describedby="basic-addon1"
                value={cedulasearch}
                onChange={cedulasearcher}
              />
            </InputGroup>
            <Button onClick={onSearch}>
              <BsSearch />
            </Button>
          </Container>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Container id="form-container">
              <Form.Group className="mb-3" controlId="formNombres">
                <Form.Label>Nombres y Apellidos</Form.Label>
                <Controller
                  control={control}
                  name="nombres"
                  defaultValue=""
                  render={({ field: { onChange, value } }) => (
                    <Form.Control
                      type="text"
                      onChange={onChange}
                      value={value}
                      autoFocus
                      placeholder="Nombres y Apellidos"
                    />
                  )}
                />
              </Form.Group>

              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formCedula">
                    <Form.Label>Documento de Identidad</Form.Label>
                    <Controller
                      control={control}
                      name="ci"
                      defaultValue=""
                      render={({ field: { onChange, value } }) => (
                        <Form.Control
                          type="number"
                          onChange={onChange}
                          value={value}
                          placeholder="12345678"
                        />
                      )}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formTelefono">
                    <Form.Label>Número de teléfono</Form.Label>
                    <Controller
                      control={control}
                      name="telefono"
                      defaultValue=""
                      render={({ field: { onChange, value } }) => (
                        <Form.Control
                          type="text"
                          onChange={onChange}
                          value={value}
                          placeholder="Número de teléfono"
                        />
                      )}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3" controlId="formEmpresa">
                <Form.Label>Empresa</Form.Label>
                <Controller
                  control={control}
                  name="empresa"
                  defaultValue=""
                  render={({ field: { onChange, value } }) => (
                    <Form.Control
                      type="text"
                      onChange={onChange}
                      value={value}
                      placeholder="Corporación Venezolana de Minería"
                    />
                  )}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formDireccion">
                <Form.Label>A dónde se dirige</Form.Label>
                <Form.Select
                  aria-label="Elija hacia dónde se dirige"
                  {...register("direccion")}
                >
                  <option>Elija hacia dónde se dirige</option>
                  <option value="Administración">Administración</option>
                  <option value="Auditoría Interna">Auditoría Interna</option>
                  <option value="Catastro Minero">Catastro Minero</option>
                  <option value="Comercialización">Comercialización</option>
                  <option value="Consultoría Jurídica">
                    Consultoría Jurídica
                  </option>
                  <option value="Gestión Comunicacional">
                    Gestión Comunicacional
                  </option>
                  <option value="Gestión Ecosocialista">
                    Gestión Ecosocialista
                  </option>
                  <option value="Gestión Humana">Gestión Humana</option>
                  <option value="Planificación y Presupuesto">
                    Planificación y Presupuesto
                  </option>
                  <option value="Presidencia">Presidencia</option>
                  <option value="Producción Minera">Producción Minera</option>
                  <option value="Proyectos y Desarrollo Minero">
                    Proyectos y Desarrollo Minero
                  </option>
                  <option value="Seguridad Integral">Seguridad Integral</option>
                  <option value="Seguimiento y Control">
                    Seguimiento y Control
                  </option>
                  <option value="OAC">OAC</option>
                  <option value="OTI">OTI</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formObservaciones">
                <Form.Label>Observaciones</Form.Label>
                <Controller
                  control={control}
                  name="observaciones"
                  defaultValue=""
                  render={({ field: { onChange, value } }) => (
                    <Form.Control
                      as="textarea"
                      onChange={onChange}
                      value={value}
                      rows={3}
                      placeholder="Observaciones"
                    />
                  )}
                />
              </Form.Group>
              {imgSrc && <img src={imgSrc} id="webcam-photo" />}
              <Button variant="primary" type="submit" id="form-btn">
                Guardar
              </Button>
            </Container>
          </Form>
          <Container id="webcam-container">
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              width="300px"
              id="webcam"
            />
            <Form onSubmit={handleSubmit(submitPhoto)}>
              <Button onClick={capture} type="submit">
                Tomar foto
              </Button>
            </Form>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>

      <Table striped bordered hover id="tabla-registro">
        <thead>
          <tr>
            <th>#</th>
            <th>Nombres y Apellidos</th>
            <th>Documento de identidad</th>
            <th>Número de Teléfono</th>
            <th>Empresa</th>
            <th>Fecha</th>
            <th>Hora de entrada</th>
            <th>Dirección</th>
            <th>Observaciones</th>
            {user === "Richard Barrera" && <th>Registrado por</th>}
            <th>Foto</th>
          </tr>
        </thead>
        <tbody>
          {results.reverse().map((entry, i) => (
            <tr key={entry.id}>
              <td>{i + 1}</td>
              <td>{entry.nombres}</td>
              <td>{entry.ci}</td>
              <td>{entry.telefono}</td>
              <td>{entry.empresa}</td>
              <td>{entry.diaentrada}</td>
              <td>{entry.horaentrada}</td>
              <td>{entry.direccion}</td>
              <td>{entry.observaciones}</td>
              {user === "Richard Barrera" && <td>{entry.registrado}</td>}
              <td>
                <img
                  src={`/uploads/${entry.foto}`}
                  alt="Mi Imagen"
                  title="Mi Imagen"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default RegistroHorario;
