import React from "react";
import { Card, Button } from "react-bootstrap";

export default function ProfilePage() {
  const user = {
    name: "Alex Guillén",
    email: "alex@example.com",
    role: "Usuario",
  };

  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-center bg-light">
      <Card
        className="shadow border-0 rounded-4"
        style={{
          width: "90%",
          maxWidth: "420px",
          background: "white",
        }}
      >
        <Card.Body className="p-4">
          <div className="text-center mb-4">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="user avatar"
              width="90"
              height="90"
              className="rounded-circle shadow-sm mb-3"
            />
            <h3 className="fw-semibold">{user.name}</h3>
            <p className="text-muted mb-1">{user.email}</p>
            <span className="badge bg-primary-subtle text-primary">
              {user.role}
            </span>
          </div>

          <hr />

          <div className="d-grid gap-2">
            <Button variant="primary" className="fw-semibold">
              Editar Perfil
            </Button>
            <Button variant="outline-secondary" className="fw-semibold">
              Cerrar Sesión
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
