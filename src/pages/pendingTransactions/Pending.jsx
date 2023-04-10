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

  function mineTransaction(pen) {
    toast.success(`${pen.file_name.substring(0, 10)}... is being mined`);
  }

  useEffect(() => {
    async function fetchPendingTransactions() {
      const response = await fetch("http://127.0.0.1:8800/pending_tx");
      const data = await response.json();
      setPending(data);
    }
    fetchPendingTransactions();
  }, []);

  const pendingElements = pending.map((pen, index) => (
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
          {pen.user_name}
        </a>
        <time dateTime={pen.datetime}>{pen.datetime}</time>
      </p>
      <button className="mine-button" onClick={() => mineTransaction(pen)}>
        Mine
      </button>
    </article>
  ));

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
      <Footer />
    </div>
  );
};

export default Pending;
