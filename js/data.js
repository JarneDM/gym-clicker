const items = [
  { name: "Treadmill", cost: 10, unlocked: false, mps: 2 },
  { name: "Benchpress", cost: 100, unlocked: false, mps: 3 },
  { name: "Protein shake", cost: 1000, unlocked: false, mps: 5 },
  { name: "Personal trainer", cost: 10000, unlocked: false, mps: 20 },
  { name: "Gym", cost: 100000, unlocked: false, mps: 50 },
  { name: "Chalk", cost: 50, unlocked: false, mps: 0.5 },
  { name: "Belt", cost: 500, unlocked: false, mps: 2 },
  { name: "Straps", cost: 750, unlocked: false, mps: 2.5 },
  { name: "Wrist wraps", cost: 600, unlocked: false, mps: 2 },
  { name: "Knee wraps", cost: 800, unlocked: false, mps: 2.5 },
  { name: "Pre-workout", cost: 1500, unlocked: false, mps: 7 },
  { name: "Protein powder", cost: 2000, unlocked: false, mps: 8 },
  { name: "Creatine", cost: 2500, unlocked: false, mps: 10 },
  { name: "Cardio", cost: 3000, unlocked: false, mps: 5 },
  { name: "Deadlift", cost: 5000, unlocked: false, mps: 15 },
  { name: "Bench", cost: 6000, unlocked: false, mps: 12 },
  { name: "Squat", cost: 7000, unlocked: false, mps: 18 },
  { name: "Steroids", cost: 20000, unlocked: false, mps: 50 },
  { name: "Bicep curl", cost: 3000, unlocked: false, mps: 6 },
  { name: "Sauna", cost: 8000, unlocked: false, mps: 5 },
  { name: "Energy drinks", cost: 1200, unlocked: false, mps: 3 },
  { name: "Gymbro", cost: 15000, unlocked: false, mps: 25 },
  { name: "OldCA clothes", cost: 5000, unlocked: false, mps: 10 },
  { name: "Dumbbells", cost: 4000, unlocked: false, mps: 8 },
  { name: "Kettlebell", cost: 3500, unlocked: false, mps: 7 },
  { name: "Barbell", cost: 4500, unlocked: false, mps: 9 },
  { name: "Resistance bands", cost: 2000, unlocked: false, mps: 4 },
  { name: "Massage gun", cost: 10000, unlocked: false, mps: 5 },
  { name: "Lifting shoes", cost: 7000, unlocked: false, mps: 6 },
  { name: "Posing mirror", cost: 5000, unlocked: false, mps: 4 },
  { name: "Home gym setup", cost: 50000, unlocked: false, mps: 30 },
  { name: "Girlfriend", cost: 1000000, unlocked: false, mps: 100 },
];

export const buildings = [
  { name: "Basic Gym", rps: 0.2, cost: 50, unlocked: false },
  { name: "Commercial Gym", rps: 3, cost: 1000, unlocked: false },
  { name: "Advanced Gym", rps: 5, cost: 4000, unlocked: false },
  { name: "Elite Gym", rps: 10, cost: 25000, unlocked: false },
];

export const skills = [
  { name: "Cardio Mastery", effect: "+10% passive mps", unlocked: false },
  { name: "Strength Focus", effect: "+20% click power", unlocked: false },
  { name: "Discipline", effect: "+5% mps per day played", unlocked: false },
  { name: "Recovery Boost", effect: "Events last 2s longer", unlocked: false },
];

export const achievements = [
  { name: "First Rep", condition: "Earn 1 rep", unlocked: false },
  { name: "Push-up Addict", condition: "Earn 1,000 reps", unlocked: false },
  { name: "Gym Owner", condition: "Buy 10 buildings", unlocked: false },
  { name: "Protein Enthusiast", condition: "Buy 5 Protein Shakes", unlocked: false },
  { name: "Beast Mode", condition: "Reach 1,000 mps", unlocked: false },
];

export const upgrades = [
  { name: "Better Shoes", effect: "Double click power", cost: 500, purchased: false },
  { name: "Gym Membership", effect: "Unlock new buildings", cost: 1000, purchased: false },
  { name: "BCAA Boost", effect: "+10% global mps", cost: 3000, purchased: false },
  { name: "Advanced Program", effect: "All buildings +5% output", cost: 5000, purchased: false },
];

export const skillTrees = {
  power: [
    { name: "Powerlifting", effect: "+10% power", unlocked: false },
    { name: "Olympic Lifting", effect: "+15% power", unlocked: false },
    { name: "Bodybuilding", effect: "+20% power", unlocked: false },
    { name: "Calisthenics", effect: "+25% power", unlocked: false },
    { name: "Muscle Memory", effect: "+30% power", unlocked: false },
  ],
  cardio: [
    { name: "Endurance", effect: "+10% cardio", unlocked: false },
    { name: "Speed", effect: "+15% cardio", unlocked: false },
    { name: "Agility", effect: "+20% cardio", unlocked: false },
    { name: "Flexibility", effect: "+25% cardio", unlocked: false },
    { name: "Stamina", effect: "+30% cardio", unlocked: false },
  ],
  flexibility: [
    { name: "Stretching", effect: "+10% flexibility", unlocked: false },
    { name: "Mobility", effect: "+15% flexibility", unlocked: false },
    { name: "Balance", effect: "+20% flexibility", unlocked: false },
    { name: "Coordination", effect: "+25% flexibility", unlocked: false },
    { name: "Agility", effect: "+30% flexibility", unlocked: false },
  ],
};

export default items;
