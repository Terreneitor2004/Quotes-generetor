import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card, Button } from "react-bootstrap";

const quotes = [
  {
    text: "Wdsdsdsd.",
    author: "wkw8jj2",
  },
  {
    text: "sdsdjsuw.",
    author: "amamsadw",
  },
  {
    text: "sdsds",
    author: "weasd",
  },
  {
    text: "If it is not right, do not do it, if it is not true, do not say it.",
    author: "Marcus Aurelius",
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
      <h2 className="mb-3 text-primary">Stoic Quotes Generator</h2>
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
