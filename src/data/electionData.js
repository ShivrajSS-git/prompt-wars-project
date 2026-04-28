export const electionStages = [
  {
    id: 1,
    title: "Model Code of Conduct",
    icon: "Megaphone",
    description: "The Election Commission of India (ECI) announces the election schedule, and the Model Code of Conduct (MCC) immediately comes into effect to ensure a level playing field.",
    tips: ["Government cannot announce new projects.", "Ruling party cannot use official machinery for campaigns.", "Follow ECI guidelines for fair play."],
    color: "#2563EB" /* Ashoka Blue */
  },
  {
    id: 2,
    title: "Voter Registration",
    icon: "UserPlus",
    description: "Citizens must ensure their names are on the Electoral Roll. You can apply using Form 6 and get your Electors Photo Identity Card (EPIC).",
    tips: ["Verify your name in the voter list online.", "Form 6 is for new registrations.", "Keep your EPIC or Aadhar card ready."],
    color: "#FF9933" /* Saffron */
  },
  {
    id: 3,
    title: "Nominations",
    icon: "FileSignature",
    description: "Candidates file their nomination papers with the Returning Officer. Papers are scrutinized, and candidates can withdraw before the final list is published.",
    tips: ["Candidates must declare their assets and criminal records.", "Scrutiny ensures all legal requirements are met.", "Withdrawal allows candidates to step back if needed."],
    color: "#138808" /* Green */
  },
  {
    id: 4,
    title: "Campaigning",
    icon: "Users",
    description: "Political parties and candidates hold rallies, distribute manifestos, and reach out to voters. Campaigning strictly ends 48 hours before polling begins.",
    tips: ["Read candidate manifestos carefully.", "Attend public debates and rallies.", "Campaigning stops during the 'Silence Period'."],
    color: "#FF9933"
  },
  {
    id: 5,
    title: "Polling Day",
    icon: "CheckSquare",
    description: "Voters cast their ballots using Electronic Voting Machines (EVMs) and can verify their vote via VVPAT. An indelible ink mark is applied to the left index finger.",
    tips: ["Find your polling booth in advance.", "Don't forget your Voter ID (EPIC) or approved alternative ID.", "Look for the VVPAT slip to verify your vote."],
    color: "#2563EB"
  },
  {
    id: 6,
    title: "Counting of Votes",
    icon: "RotateCw",
    description: "Under tight security, EVMs are opened and votes are counted in the presence of candidates or their agents. Results are declared by the ECI.",
    tips: ["Follow official news for accurate trends.", "VVPAT slips may be tallied in case of disputes.", "Respect the democratic mandate."],
    color: "#138808"
  },
  {
    id: 7,
    title: "Government Formation",
    icon: "Award",
    description: "The party or coalition with the majority of seats is invited by the President (Lok Sabha) or Governor (State Assembly) to form the government.",
    tips: ["A majority requires more than 50% of the seats.", "If no clear majority, a coalition government may be formed.", "Elected leaders take the oath of office."],
    color: "#FF9933"
  }
];

export const commonQuestions = [
  {
    q: "How do I check if my name is on the voter list?",
    a: "Visit voters.eci.gov.in and enter your details or EPIC number. You can also call the 1950 helpline or check via the Voter Helpline App."
  },
  {
    q: "What is an EVM and VVPAT?",
    a: "EVM (Electronic Voting Machine) records your vote electronically. VVPAT (Voter Verifiable Paper Audit Trail) prints a paper slip for 7 seconds, showing the candidate's serial number, name, and symbol, allowing you to verify your vote."
  },
  {
    q: "Can I vote if I don't have an EPIC card?",
    a: "Yes! If your name is in the Electoral Roll, you can use any of the 12 alternative identity documents including Aadhar Card, PAN Card, Driving License, or MNREGA Job Card."
  },
  {
    q: "How to register as a new voter?",
    a: "If you are 18+ on the qualifying date, fill Form 6 on the Voter Portal (voters.eci.gov.in) or submit it to your Booth Level Officer (BLO)."
  },
  {
    q: "What is NOTA?",
    a: "None Of The Above (NOTA) is the last button on the EVM. It allows you to record that you don't support any of the candidates while still participating in the voting process."
  },
  {
    q: "How do I find my polling station?",
    a: "You can find your polling booth on your 'Voter Information Slip' or by using the ECI portal (voters.eci.gov.in) under 'Know Your Polling Station'."
  }
];
