import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((rs) => rs.json())
      .then((data) => setQuestions(data));
  }, []);

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? (
        <QuestionForm onChangePage={setPage} onSetQuestion={setQuestions} />
      ) : (
        <QuestionList questions={questions} onSetQuestion={setQuestions} />
      )}
    </main>
  );
}

export default App;
