# 🛒 Hypermart Checkout System

A responsive queue management simulation built using **React**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.  
The system distributes customers across checkout counters based on the total number of items each counter is currently handling.

---

## 📁 Repository Structure

```
client/
├── public/
├── src/
│   ├── components/
│   │   ├── AddItems.tsx
│   │   ├── CounterItem.tsx
│   │   └── Counters.tsx
│   ├── constants/
│   │   └── constant.ts
│   ├── types/
│   │   └── index.ts
│   ├── utils/
│   │   └── utility.ts
│   ├── App.tsx
│   └── main.tsx
├── tailwind.config.ts
├── index.html
├── tsconfig.json
└── README.md
```

---

## 🚀 Features

- 📥 Add a customer with a selected number of items (1–30)  
- 🧠 Smart allocation to the **least-loaded** checkout counter  
- ✅ Only the **first customer** in a counter can be removed  
- 💫 Smooth animations using **Framer Motion**  
- 📱 Fully responsive UI with **Tailwind CSS**

---

## ⏱️ Time Complexity

### 1. `findNextCheckout(checkouts: CheckoutQueue[])`

Selects the checkout counter with the minimum total items.

```ts
const index = findNextCheckout(checkouts);
```

- ✅ **Time Complexity:** `O(n)`  
  _Where `n` = number of checkout counters (usually small and fixed)._

### 2. Calculating total items per counter:

```ts
queue.customers.reduce((acc, customer) => acc + customer.items, 0);
```

- ✅ **Time Complexity:** `O(m)`  
  _Where `m` = number of customers in the counter._

**Overall insertion complexity:** `O(n * m)` — efficient for typical small-scale use.

---

## 📌 Assumptions

- Fixed number of counters (e.g., 3).  
- Only the **first customer** in each queue can be removed manually.  
- No backend or persistent storage (no Redis/localStorage).  
- No auto-removal of customers/items after timeout; removal is manual only.

---

## 🛠️ Installation & Running Locally

1. Clone the repository:

```bash
git clone https://github.com/your-username/assignment.git
cd assignment
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

Visit `http://localhost:5173` in your browser (or the port your terminal shows).
