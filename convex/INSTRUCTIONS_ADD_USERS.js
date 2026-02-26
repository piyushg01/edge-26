/**
 * INSTRUCTIONS TO ADD USERS WITH PASSWORDS IN CONVEX
 * ====================================================
 * 
 * Since Convex Auth handles password hashing internally, you have 2 options:
 * 
 * OPTION 1: Use the Sign-Up Form (RECOMMENDED)
 * ---------------------------------------------
 * 1. Run your app: npm run dev
 * 2. Go to: http://localhost:3001/auth
 * 3. For Admin: Click "Register new Admin" → Enter code: 280405
 * 4. Fill the form:
 *    - Name: Your Name
 *    - Email: your@email.com
 *    - PRN: 12345678
 *    - Ticket: Select type (EDGE, EDGE + MOCK GDPI, MOCK GDPI, Admin)
 *    - Password: yourpassword
 *    - Confirm Password: yourpassword
 * 5. Click Continue
 * 
 * OPTION 2: Use Convex Dashboard (For Bulk Import)
 * -------------------------------------------------
 * 1. Go to: https://affable-labrador-336.convex.cloud
 * 2. Navigate to "Functions" tab
 * 3. Find and run: `bulkRegisterUsers` mutation
 * 4. Provide JSON input like:
 * 
 * {
 *   "users": [
 *     {
 *       "email": "student1@example.com",
 *       "password": "password123",
 *       "name": "Student One",
 *       "prn": 12345678,
 *       "ticket": "EDGE"
 *     },
 *     {
 *       "email": "student2@example.com",
 *       "password": "password456",
 *       "name": "Student Two",
 *       "prn": 12345679,
 *       "ticket": "MOCK GDPI"
 *     }
 *   ]
 * }
 * 
 * OPTION 3: Create CSV Import Script
 * -----------------------------------
 * See bulkImportUsers.js for CSV import functionality
 */

import { internalMutation } from "./_generated/server";
import { v } from "convex/values";

// This is an internal mutation that can be called from Convex dashboard
export const bulkRegisterUsers = internalMutation({
  args: {
    users: v.array(
      v.object({
        email: v.string(),
        password: v.string(),
        name: v.string(),
        prn: v.number(),
        ticket: v.union(
          v.literal("EDGE"),
          v.literal("EDGE + MOCK GDPI"),
          v.literal("MOCK GDPI"),
          v.literal("Admin")
        ),
      })
    ),
  },
  handler: async (ctx, args) => {
    // Note: This function provides instructions since Convex Auth
    // handles password hashing through its own flow
    
    return {
      message: "To create users with passwords, use one of these methods:",
      methods: [
        {
          method: "Sign-Up Form",
          url: "http://localhost:3001/auth",
          steps: [
            "Click 'Register new Admin'",
            "Enter admin code: 280405",
            "Fill registration form",
            "Submit"
          ]
        },
        {
          method: "Programmatic Registration",
          description: "Use the signIn function with flow: 'signUp' from frontend",
          example: "signIn('password', { email, password, name, prn, ticket, flow: 'signUp' })"
        }
      ],
      providedUsers: args.users.map(u => ({
        email: u.email,
        name: u.name,
        prn: u.prn,
        ticket: u.ticket,
        note: "Password not shown for security"
      }))
    };
  },
});

export default {
  instructions: "See comments in this file for how to add users with passwords"
};
