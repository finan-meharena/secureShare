import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

export const pendingLoader = () => {
  return null;
};

// styles
import "./Pending.css";
import { toast } from "react-toastify";

const Pending = () => {
  const [pending, setPending] = useState([]);
  const [mine, setMine] = useState(null);
  const [minedIndexes, setMinedIndexes] = useState([]);

  function mineTransaction(pen, index) {
    toast.success(`${pen.file_name.substring(0, 10)}... is being mined`);
    setMine(pen);
    setMinedIndexes((prevIndexes) => [...prevIndexes, index]);
  }

  useEffect(() => {
    async function fetchPendingTransactions() {
      const response = await fetch("http://127.0.0.1:8800/pending_tx");
      const data = await response.json();
      setPending(data);
    }
    fetchPendingTransactions();

    if (mine) {
      fetch("http://localhost:8800/mine-transaction", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(mine),
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error(error));
      setMine(null);
    }
  }, [mine]);

  const pendingElements = pending.map((pen, index) => {
    if (minedIndexes.includes(index)) {
      return null;
    }
    return (
      <article key={index}>
        <header>
          <h2>
            <a href="#" className="file-name">
              {" "}
              {pen.file_name}{" "}
            </a>
          </h2>
        </header>
        <p>
          <span>by</span>
          <a href="#" className="author">
            {pen.user_name.toLowerCase()}
          </a>
        </p>
        <button
          className={mine ? "mined-button btn" : "mine-button"}
          onClick={() => mineTransaction(pen, index)}
        >
          {mine ? "Mined" : "Mine"}
        </button>
      </article>
    );
  });

  return (
    <div className="pending-container fade-animation">
      <Navbar />
      <section className="recent_posts">
        <header>
          <h1>Pending Transactions</h1>
        </header>
        <hr />
        {pendingElements}
      </section>
      <Footer className="footer" />
    </div>
  );
};

export default Pending;
