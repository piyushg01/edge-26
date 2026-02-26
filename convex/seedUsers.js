import { mutation } from "./_generated/server";
import { v } from "convex/values";

// This mutation allows you to create users directly from Convex dashboard
export const seedUser = mutation({
  args: {
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
  },
  handler: async (ctx, args) => {
    const { email, password, name, prn, ticket } = args;

    // Check if user already exists
    const existingUser = await ctx.db
      .query("users")
      .withIndex("by_email", (q) => q.eq("email", email))
      .first();

    if (existingUser) {
      throw new Error(`User with email ${email} already exists`);
    }

    // Import the Password provider to hash password
    // Note: You'll need to manually create auth entries in authAccounts and authSessions tables
    // Or use the signUp flow from the frontend
    
    return {
      message: "To create users with passwords, use the sign-up form on /auth page",
      instructions: [
        "1. Go to http://localhost:3001/auth",
        "2. Click 'Register new Admin' and enter code: 280405",
        "3. Fill in the form with user details",
        "4. Or create a bulk import script"
      ],
      providedData: { email, name, prn, ticket }
    };
  },
});

// Bulk seed multiple users
export const seedMultipleUsers = mutation({
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
    const results = [];
    
    for (const user of args.users) {
      const existingUser = await ctx.db
        .query("users")
        .withIndex("by_email", (q) => q.eq("email", user.email))
        .first();

      if (!existingUser) {
        results.push({
          email: user.email,
          status: "ready_to_create",
          message: "Use sign-up form to create this user"
        });
      } else {
        results.push({
          email: user.email,
          status: "already_exists"
        });
      }
    }

    return results;
  },
});
