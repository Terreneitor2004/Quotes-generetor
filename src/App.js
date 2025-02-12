import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card } from "react-bootstrap";

export default function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container className="text-center mt-5">
      <h2 className="mb-3 text-primary">Digital Clock</h2>
      <Card className="shadow-lg p-3">
        <div className="display-4 text-dark">{time.toLocaleTimeString()}</div>
      </Card>
    </Container>
  );
}
