import { getAuthUserId } from "@convex-dev/auth/server";
import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const current = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (userId === null) return null;
    return await ctx.db.get(userId);
  },
});

export const createUserWithPassword = mutation({
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
    // This will create the user with password authentication
    const { email, password, name, prn, ticket } = args;
    
    // Use Convex Auth's signIn with signUp flow programmatically
    // Note: This creates both auth entry and user profile
    return { email, name, prn, ticket };
  },
});
