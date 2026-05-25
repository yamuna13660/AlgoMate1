const express = require("express");
const router = express.Router();
const Groq = require("groq-sdk");

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

router.post("/get-hint", async (req, res) => {
  const { problemTitle, problemDescription, userCode } = req.body;

  if (!problemTitle || !problemDescription) {
    return res.status(400).json({ error: "Problem title and description required" });
  }

  try {
    const response = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "system",
          content: `You are an expert DSA tutor. 
                    Give ONLY a hint, NOT the full solution. 
                    Keep it under 3 lines. 
                    Be beginner friendly.`
        },
        {
          role: "user",
          content: `Problem: ${problemTitle}
                    Description: ${problemDescription}
                    Student Code: ${userCode || "No code yet"}
                    Give a hint:`
        }
      ],
      max_tokens: 150
    });

    const hint = response.choices[0].message.content;
    res.json({ hint });

  } catch (error) {
    console.error("GROQ ERROR:", error.message);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;