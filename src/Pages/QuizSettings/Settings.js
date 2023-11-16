import React, { useState } from "react";
import { TextField, MenuItem, Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import categories from "../../Data/Categories";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import "./Settings.css";

const Settings = ({ name, setName, fetchQuestions }) => {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);
  const space = { marginBottom: 30 };
  console.log("Name prop in Settings:", name);
  console.log("setName prop in Settings:", setName);

  const navigate = useNavigate();

  function handleSubmit() {
    if (!category || !difficulty || !name) {
      setError(true);
      return;
    } else {
      setError(false);
      fetchQuestions(category, difficulty);
      navigate("/quiz");
    }
  }

  return (
    <div className="content">
      <div className="settings">
        <span>Quiz Settings</span>
        <div className="settings_select">
          {error && <ErrorMessage>Please Fill all the fields</ErrorMessage>}
          <TextField
            style={{ marginTop: 25, marginBottom: 25 }}
            label="Enter Your Name"
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            select
            label="Select Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            variant="outlined"
            style={{ marginBottom: 30 }}
          >
            {categories.map((cat) => (
              <MenuItem key={cat.category} value={cat.value}>
                {cat.category}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            label="Select difficulty"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            variant="outlined"
            style={space}
          >
            <MenuItem key="Easy" value="easy">
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              Medium
            </MenuItem>
            <MenuItem key="Hard" value="hard">
              Hard
            </MenuItem>
          </TextField>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleSubmit}
          >
            Start
          </Button>
        </div>
      </div>
      <img
        src="https://www.riddle.com/imageservice/q_80,f_auto,c_fill,w_960,h_540/ed6cozjawexldjs7yedn"
        className="banner"
        alt="Image quiz time"
      />
    </div>
  );
};

export default Settings;
