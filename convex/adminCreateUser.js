import { action } from "./_generated/server";
import { v } from "convex/values";
import { api } from "./_generated/api";

/**
 * Admin action to create a user with password
 * Run this from Convex dashboard or via API
 * 
 * Example usage in Convex dashboard:
 * api.adminCreateUser.createUser({
 *   email: "student@example.com",
 *   password: "password123",
 *   name: "John Doe",
 *   prn: 12345678,
 *   ticket: "EDGE"
 * })
 */
export const createUser = action({
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

    try {
      // Call the auth signIn with signUp flow
      // This properly creates the user with hashed password
      const result = await ctx.runAction(api.auth.signIn, {
        provider: "password",
        params: {
          email,
          password,
          name,
          prn,
          ticket,
          flow: "signUp",
        },
      });

      return {
        success: true,
        message: `User ${email} created successfully`,
        user: { email, name, prn, ticket },
      };
    } catch (error) {
      return {
        success: false,
        message: error.message || "Failed to create user",
        error: error.toString(),
      };
    }
  },
});

/**
 * Bulk create multiple users
 * 
 * Example usage:
 * api.adminCreateUser.bulkCreateUsers({
 *   users: [
 *     { email: "user1@example.com", password: "pass123", name: "User 1", prn: 12345678, ticket: "EDGE" },
 *     { email: "user2@example.com", password: "pass456", name: "User 2", prn: 12345679, ticket: "MOCK GDPI" }
 *   ]
 * })
 */
export const bulkCreateUsers = action({
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
      try {
        const result = await ctx.runAction(api.adminCreateUser.createUser, user);
        results.push(result);
      } catch (error) {
        results.push({
          success: false,
          email: user.email,
          message: error.message || "Failed to create user",
        });
      }
    }

    return {
      total: args.users.length,
      successful: results.filter((r) => r.success).length,
      failed: results.filter((r) => !r.success).length,
      results,
    };
  },
});
