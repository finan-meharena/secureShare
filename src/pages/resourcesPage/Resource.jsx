import React from "react";
import Navbar from "../../components/Navbar/Navbar";

// import styles
import "./Resource.css";
import { useEffect } from "react";
import { useState } from "react";
import Footer from "../../components/Footer/Footer";

const Resource = () => {
  const [chain, setChain] = useState([]);
  const [userTransactions, setUserTransactions] = useState([]);


  useEffect(() => {
    const fetchChain = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8800/chain");
        const data = await response.json();
        const chainData = data.chain;
        setChain(chainData);
        const userTransactionsData = chainData.reduce((acc, block) => {
          const transactions = block.transactions.filter(
            (transaction) => transaction.user_name != "Finan"
          );
          return acc.concat(transactions);
        }, []);
        setUserTransactions(userTransactionsData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchChain();
  }, []);

  const resourceElements = userTransactions.map((chain, index) => (
    <tr key={index}>
      <td>{chain.file_name.substring(0, 18).toLowerCase()}</td> 
      <td> today </td>
      <td>{chain.user_name}</td>
      <td><a href={chain.file_url}>Download</a></td>
    </tr>
  ));

  console.log(userTransactions)

  return (
    <div className="resource-container">
      <Navbar />
      <div className="table-container">
        <div className="my-table">
          <div className="table-header">
            My Files
          </div>
        <table>
          <thead>
            <tr className="header-underline">
              <th>Filename</th>
              <th>Created At</th>
              <th>Owner</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {resourceElements}
          </tbody>
        </table>
        </div>
        <div className="my-table">
        <div className="table-header">
            Others
          </div>
        <table className="my-table">
          <thead>
            <tr className="header-underline">
              <th>Filename</th>
              <th>Created At</th>
              <th>Owner</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {resourceElements}
          </tbody>
        </table>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Resource;
