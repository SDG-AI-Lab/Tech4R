# 🌐 Tech4R Website

Tech4R is a digital initiative focused on disaster resilience through technology. This website showcases our mission, projects, events, and ways to get involved.

---

## ⚙️ Tech Stack

- [Next.js](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Supabase](https://supabase.com/) (PostgreSQL + Auth + Storage)

---

## 🚀 Getting Started (Local Setup)

### 1. **Clone the repository**

```bash
git clone https://github.com/your-org/tech4r.git
cd tech4r
```

### 2. **Install dependencies**

```bash
npm install
```

### 3. **Create your `.env.local` file**

Create a `.env.local` file at the root of the project and add the following:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-public-api-key
```

✅ These values will be shared with the internal dev team.

---

## 🧠 Supabase Setup

We are using a shared Supabase instance.

- ✅ You **do not** need to create your own instance.
- ✅ You **do not** need to seed data locally.
- ✅ You **can** read/write using the credentials above.
- ❗ Ensure **RLS (Row Level Security)** is disabled on all necessary tables.

If you're unsure which tables are affected, ask the Scrum Master for the Supabase SQL schema or admin access.

---

## 💻 Run the Development Server

```bash
npm run dev
```

Then visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧩 Project Structure

```
tech4r/
├── .next/                  # Next.js build output
├── node_modules/          # Node.js dependencies
├── public/                # Static files
├── src/
│   ├── app/              # Next.js app directory (App Router)
│   │   ├── globals.css   # Global styles
│   │   ├── layout.tsx    # Root layout component
│   │   ├── page.tsx      # Home page component
│   │   └── favicon.ico   # Site favicon
│   └── components/         # Reusable UI components
│   └── lib/              # Utility functions and shared code
│       └── supabaseClient.ts  # Supabase client configuration
├── .gitignore            # Git ignore rules
├── eslint.config.mjs     # ESLint configuration
├── next-env.d.ts         # Next.js TypeScript declarations
├── next.config.ts        # Next.js configuration
├── package-lock.json     # Dependency lock file
├── package.json          # Project metadata and dependencies
├── postcss.config.mjs    # PostCSS configuration
├── README.md             # Project documentation
└── tsconfig.json         # TypeScript configuration
```

---

## 📡 Supabase Client (src/lib/supabaseClient.ts)

We use a centralized Supabase client instance:

```ts
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default supabase;
```

---

## 🧪 Testing & Validation

The site should be verified for the following:

- ✅ Mobile responsiveness
- ✅ SEO optimization (meta tags, alt texts, etc.)
- ✅ Cross-browser compatibility
- ✅ Post-launch: Analytics setup & feedback collection

---

## 🧬 Database Tables (Supabase)

| Table Name       | Description                         |
|------------------|-------------------------------------|
| `projects`       | Project cards (name, description, etc.) |
| `categories`     | Categories (each project belongs to one) |
| `events`         | Past/upcoming events                |
| `event_types`    | Reference table for event type (`training`, `hackathon`, etc.) |
| `volunteers`     | Testimonials & open volunteer roles |
| `partners`       | Partner logos & contact info        |

> You do not need to recreate these tables locally.

---

## 📬 Questions or Issues?

For access or help with setup, contact the **Scrum Master** at josue.ushindi@undp.org

---

## 📌 Project Info

- 💡 **Project Name**: Tech4R — Digital Solutions for Disaster Resilience
- 🛠️ **Lead Tech Stack**: Next.js + Supabase + Tailwind CSS
- 🌍 **Purpose**: Showcase mission, events, and enable collaboration via volunteering & partnerships.
