# PartsPal 🤖

**Robotics Lab Inventory & Issue Management System**

PartsPal is a full-stack web application designed for robotics labs and student clubs to efficiently manage hardware inventory, track component availability, issue individual parts or complete robotics kits to members, handle returns, and monitor member borrowing history.

---

## 🌟 Features

- **Inventory Management**: View, filter by category, search, and monitor stock availability with visual progress indicators and status badges.
- **Add Stock**: Increase total and available inventory for existing components without creating duplicate records.
- **Individual Part Issuing**: Select specific components, specify issue quantities with stock validation, set due dates, and assign them to club members.
- **Robotics Kit Issuing**: Pre-configured kits (e.g., Line Follower Kit, Obstacle Avoidance Kit, Servo Control Kit) with **all-or-nothing stock validation** across all required components before issuing.
- **Part & Kit Returns**: Process returns for issued items, automatically restocking components into available inventory.
- **Notifications Panel**: Real-time alerts for low-stock items, overdue borrowings, active issues, and returns with customizable notification preferences.
- **Member Management & History**: Search members by name or registration number and view a complete historical record of all current and past borrowings.
- **Printable QR Labels**: Generate and print structured physical QR tags for inventory components encoding part ID, name, category, and availability.
- **Persistent Dark & Light Themes**: Seamless theme toggle synced with system preferences and local storage.
- **Responsive Mobile-Friendly Interface**: Clean, touch-friendly UI optimized for desktop tables and mobile cards across all viewports.

---

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite, Vanilla CSS (Design System Tokens)
- **Backend**: Node.js, Express.js
- **Database**: SQLite (`better-sqlite3`)
- **Libraries & Tools**: `qrcode` (frontend QR code generation), REST API architecture
- **Language**: JavaScript (ES6+)

---

## 📁 Project Structure

```text
PartsPal/
├── backend/
│   ├── server.js        # Express server, REST endpoints, and transaction logic
│   ├── database.js      # SQLite schema initialization and seed data
│   ├── partspal.db      # SQLite database storage file
│   └── package.json     # Backend dependencies
├── frontend/
│   ├── src/
│   │   ├── App.jsx      # Main React dashboard, views, modals, and state
│   │   ├── App.css      # Core design tokens, layout styles, and mobile media queries
│   │   └── main.jsx     # Vite entry point
│   ├── vite.config.js   # Vite configuration with host network binding
│   ├── package.json     # Frontend dependencies
│   ├── .env.example     # Environment variable template
│   └── index.html       # HTML root container
└── README.md            # Project documentation
```

---

## 🚀 Setup and Installation

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/vivan1410/PartsPal.git
cd PartsPal
```

### 2. Install Backend Dependencies

```bash
cd backend
npm install
```

### 3. Install Frontend Dependencies

```bash
cd ../frontend
npm install
```

### 4. Start the Application

Open two terminal windows:

- **Terminal 1 (Backend Server)**:
  ```bash
  cd backend
  node server.js
  ```
  *The Express backend server runs on `http://localhost:5000`.*

- **Terminal 2 (Frontend Dev Server)**:
  ```bash
  cd frontend
  npm run dev
  ```
  *The Vite frontend server runs on `http://localhost:5173`.*

---

## 📱 Local Network / Mobile Testing

PartsPal supports testing across multiple devices (such as a smartphone and laptop) connected to the same Wi-Fi network.

1. **Backend Host Binding**: The backend Express server listens on host `0.0.0.0:5000`, making it accessible across your local network.
2. **Environment Variable Configuration**:
   Create a `.env` file in the `frontend/` directory (copied from `.env.example`):
   ```env
   VITE_API_URL=http://YOUR-PC-IP:5000
   ```
   *Replace `YOUR-PC-IP` with your computer's local IP address (e.g., `192.168.1.50` or `10.0.0.15`).*

3. **Access on Mobile Device**:
   - Open your phone browser and navigate to: `http://YOUR-PC-IP:5173`
   - The frontend running on your phone will communicate with the Node backend on your laptop over the local network.

---

## 📖 Usage Workflow

1. **Dashboard Overview**: Check system totals, available components, currently issued items, and low-stock alerts at a glance.
2. **Add Stock**: Navigate to **Inventory** → **+ Add Stock** to increase quantity for existing parts.
3. **Issue Equipment**: Navigate to **Issues** → **+ Issue Parts / Kit**:
   - Choose **Individual Part** mode to issue specific items.
   - Choose **Kit** mode to issue pre-configured kits with automatic stock validation.
4. **Track & Return Items**: Monitor active and overdue issues, and click **Return** when components are returned to restock inventory automatically.
5. **Manage Members**: Navigate to **Members** to view borrower statistics or click **View History** to inspect a member's complete issue log.
6. **Print QR Tags**: Go to **Inventory**, click **Print QR** on any part card, and preview/print the physical equipment tag.

---

## 🤖 AI Usage Note

AI tools were used as a development assistant for understanding concepts, debugging, generating implementation suggestions, improving UI responsiveness, testing ideas, and reviewing code. The project was manually tested and integrated by the developer.

---

## 🔗 Demo Links

- **Live Demo**: *To be added after deployment*
- **Demo Video**: *To be added if required*

---

## 📜 Git History

The project was developed incrementally using Git for version control. Commits document major feature additions, backend endpoint enhancements, database schema seeding, UI design polish, and mobile responsiveness improvements.
