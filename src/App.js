import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card, Button } from "react-bootstrap";

const quotes = [
  {
    text: "No hay caminos para la paz; la paz es el camino",
    author: "Mahatma Gandhi",
  },
  {
    text: "Cada día sabemos más y entendemos menos",
    author: "Albert Einstein",
  },
  {
    text: "El mundo no está en peligro por las malas personas sino por aquellas que permiten la maldad",
    author: "Albert Einstein",
  },
  {
    text: "Dar el ejemplo no es la principal manera de influir sobre los demás; es la única manera.",
    author: "Albert Einstein",
  },
];

const getRandomQuote = () => quotes[Math.floor(Math.random() * quotes.length)];

export default function App() {
  const [quote, setQuote] = useState(getRandomQuote());

  useEffect(() => {
    const interval = setInterval(() => {
      setQuote(getRandomQuote());
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Container className="text-center mt-5">
      <h2 className="mb-3 text-primary">Quotes Generator</h2>
      <Card className="shadow-lg p-3">
        <blockquote className="blockquote">
          <p>"{quote.text}"</p>
          <footer className="blockquote-footer">{quote.author}</footer>
        </blockquote>
        <Button
          variant="primary"
          className="mt-3"
          onClick={() => setQuote(getRandomQuote())}
        >
          New Quote
        </Button>
      </Card>
    </Container>
  );
}
