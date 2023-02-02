import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { UserContext } from "./user/UserContext";
import { types } from "./types/types";

export const Inicio = () => {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const { handleSubmit, control } = useForm();
  const { dispatch } = useContext(UserContext);

  const onSubmit = async (data) => {
    const { codigo } = data;
    await axios
      .post("/api/login", {
        codigo,
      })
      .then((response) => {
        alert(`Bienvenida/o, ${response.data.responsable}`);
        dispatch({
          type: types.login,
          payload: { user: response.data.responsable },
        });
        handleClose();
      })
      .catch((err) => {
        console.error(err);
        alert("Datos incorrectos. Por favor, intente nuevamente.");
      });
  };

  return (
    <Modal show={show} backdrop="static" keyboard={false}>
      <Modal.Header>
        <Modal.Title>Iniciar sesión</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Body>
          <Container id="form-container">
            <Form.Group className="mb-3" controlId="formNombres">
              <Form.Label>Código de usuario</Form.Label>
              <Controller
                control={control}
                name="codigo"
                defaultValue=""
                render={({ field: { onChange, value } }) => (
                  <Form.Control
                    type="text"
                    onChange={onChange}
                    value={value}
                    autoFocus
                  />
                )}
              />
            </Form.Group>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Iniciar sesión
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};
