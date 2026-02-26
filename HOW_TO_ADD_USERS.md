# How to Add Users with Passwords in Convex

## Quick Start

The system now uses **Phone Number as the password** for all users. When registering or signing in, use the phone number as the password.

## Method 1: Using the Sign-Up Form (RECOMMENDED)

### Step 1: Start Your Application
```bash
npm run dev
```

### Step 2: Navigate to Auth Page
Open your browser and go to: `http://localhost:3001/auth`

### Step 3: Register Users

**For Admin Users:**
1. Click "Register new Admin"
2. Enter admin code: `280405`
3. Fill in the registration form:
   - Full name
   - Email
   - PRN
   - Phone Number (this will be your password)
   - Select Ticket type: "Admin"
4. Click "Continue"

**For Regular Users:**
1. Same process as admin
2. Select appropriate ticket type:
   - EDGE
   - EDGE + MOCK GDPI
   - MOCK GDPI

### Step 4: Sign In
After registration, use:
- **Email**: Your registered email
- **Password**: Your phone number

---

## Method 2: Bulk User Creation

### Option A: Use the Helper Script

1. Edit `scripts/addUsers.js` and add your users:
```javascript
const users = [
  {
    email: "user@example.com",
    name: "User Name",
    prn: 12345678,
    phone: "9876543210",
    ticket: "EDGE"
  },
  // Add more users...
];
```

2. Run the script to see the list:
```bash
node scripts/addUsers.js
```

3. Manually register each user using the sign-up form with the displayed credentials.

### Option B: CSV Import (Future Enhancement)

Create a CSV file with user data and import via a custom script.

---

## Method 3: Convex Dashboard

1. Go to: https://affable-labrador-336.convex.cloud
2. Navigate to "Data" tab
3. View existing users in the `users` table
4. Note: You cannot add passwords directly - use sign-up form

---

## Important Notes

- **Phone Number is the password** - Users sign in with their phone number
- **Passwords are hashed** - Phone number is securely hashed before storage
- **Admin code**: `280405` (for admin registration)
- **Email is unique** - Cannot register same email twice
- **Phone is indexed** - For fast lookups

---

## Troubleshooting

**Issue**: "User already exists"
- Solution: Use a different email or sign in with existing credentials

**Issue**: "Invalid Admin Code"
- Solution: Make sure you're entering `280405` correctly

**Issue**: "Passwords do not match"
- Solution: Ensure password and confirm password are identical

---

## Example Users for Testing

```javascript
// Admin User
Email: admin@edge26.com
Password: 9999999999 (Phone)
Name: Admin User
PRN: 99999999
Phone: 9999999999
Ticket: Admin

// Student User 1
Email: student1@example.com
Password: 9876543210 (Phone)
Name: Student One
PRN: 12345678
Phone: 9876543210
Ticket: EDGE

// Student User 2
Email: student2@example.com
Password: 9876543211 (Phone)
Name: Student Two
PRN: 12345679
Phone: 9876543211
Ticket: EDGE + MOCK GDPI
```

Register these users via the sign-up form at `http://localhost:3001/auth`
