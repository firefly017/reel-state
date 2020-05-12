import React, { useState, useEffect } from "react";
import axios from "axios";
import AgentCard from "./AgentCard";

export default function AgentList() {
  const [agentCards, setAgentCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(
        "https://my-json-server.typicode.com/Codaisseur/listings-agents-data/agents"
      );
      setAgentCards(data.data);
    };
    fetchData();
  }, []);

  return (
    <div className="agentID">
      {agentCards.map((props) => {
        return <ul key={props.id}> {AgentCard(props)}</ul>;
      })}
    </div>
  );
}
