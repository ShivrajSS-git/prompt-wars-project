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
    a: "You can check your name on the Electoral Roll by visiting the National Voters' Service Portal (NVSP) or using the Voter Helpline App provided by the ECI."
  },
  {
    q: "What is an EVM and VVPAT?",
    a: "EVM stands for Electronic Voting Machine, used to record your vote. VVPAT (Voter Verifiable Paper Audit Trail) prints a slip so you can visually verify your vote was recorded correctly."
  },
  {
    q: "Can I vote if I don't have an EPIC card?",
    a: "Yes, if your name is on the electoral roll, you can vote by showing alternative approved ID proofs like an Aadhar Card, PAN Card, Passport, or Driving License."
  },
  {
    q: "What is NOTA?",
    a: "NOTA stands for 'None Of The Above'. It is an option on the EVM allowing voters to officially register their rejection of all candidates contesting in their constituency."
  }
];
