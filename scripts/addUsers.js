/**
 * Script to add users programmatically
 * 
 * Usage:
 * node scripts/addUsers.js
 */

const users = [
  {
    email: "admin@edge26.com",
    name: "Admin User",
    prn: 99999999,
    phone: "9999999999",
    ticket: "Admin"
  },
  {
    email: "student1@example.com",
    name: "Student One",
    prn: 12345678,
    phone: "9876543210",
    ticket: "EDGE"
  },
  {
    email: "student2@example.com",
    name: "Student Two",
    prn: 12345679,
    phone: "9876543211",
    ticket: "EDGE + MOCK GDPI"
  },
  // Add more users here
];

console.log("=".repeat(60));
console.log("USER CREATION INSTRUCTIONS");
console.log("=".repeat(60));
console.log("\nTo add these users to your system:\n");

console.log("METHOD 1: Manual Registration (Recommended)");
console.log("-".repeat(60));
console.log("1. Start your app: npm run dev");
console.log("2. Go to: http://localhost:3001/auth");
console.log("3. For each user:");
console.log("   - Click 'Register new Admin' (enter code: 280405)");
console.log("   - Fill in the details below");
console.log("   - Click Continue\n");

users.forEach((user, index) => {
  console.log(`User ${index + 1}:`);
  console.log(`  Email: ${user.email}`);
  console.log(`  Password: ${user.phone} (Phone is used as password)`);
  console.log(`  Name: ${user.name}`);
  console.log(`  PRN: ${user.prn}`);
  console.log(`  Phone: ${user.phone}`);
  console.log(`  Ticket: ${user.ticket}`);
  console.log("");
});

console.log("=".repeat(60));
console.log("SAVE THIS INFORMATION");
console.log("=".repeat(60));
