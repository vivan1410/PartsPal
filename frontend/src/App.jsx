import { useEffect, useState, useRef } from "react";
import "./App.css";

// Crisp SVG Icons
function IconGear() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
    </svg>
  );
}

function IconDashboard() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="9" rx="1"/>
      <rect x="14" y="3" width="7" height="5" rx="1"/>
      <rect x="14" y="12" width="7" height="9" rx="1"/>
      <rect x="3" y="16" width="7" height="5" rx="1"/>
    </svg>
  );
}

function IconInventory() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
      <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
      <line x1="12" y1="22.08" x2="12" y2="12"/>
    </svg>
  );
}

function IconKits() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
    </svg>
  );
}

function IconIssues() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15 3 21 3 21 9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  );
}

function IconMembers() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  );
}

function IconSettings() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3"/>
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
    </svg>
  );
}

function IconBell() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
      <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
    </svg>
  );
}

function IconSun() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/>
      <line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/>
      <line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  );
}

function IconMoon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  );
}

function IconMenu() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="12" x2="21" y2="12"/>
      <line x1="3" y1="6" x2="21" y2="6"/>
      <line x1="3" y1="18" x2="21" y2="18"/>
    </svg>
  );
}

function IconClose() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"/>
      <line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  );
}

function IconSearch() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"/>
      <line x1="21" y1="21" x2="16.65" y2="16.65"/>
    </svg>
  );
}

function IconBolt() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  );
}

function IconTotal() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
      <line x1="8" y1="21" x2="16" y2="21"/>
      <line x1="12" y1="17" x2="12" y2="21"/>
    </svg>
  );
}

function IconCheck() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
      <polyline points="22 4 12 14.01 9 11.01"/>
    </svg>
  );
}

function IconArrowUpRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="7" y1="17" x2="17" y2="7"/>
      <polyline points="7 7 17 7 17 17"/>
    </svg>
  );
}

function IconAlertTriangle() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
      <line x1="12" y1="9" x2="12" y2="13"/>
      <line x1="12" y1="17" x2="12.01" y2="17"/>
    </svg>
  );
}

function IconRocket() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.71.19-1.81-.47-2.47l-.06-.06c-.66-.66-1.76-1.18-2.47-.47z"/>
      <path d="M12 15l-3-3 7.35-7.35c.78-.78 2.05-.78 2.83 0v0c.78.78.78 2.05 0 2.83L12 15z"/>
      <path d="M9 18l-4.5 4.5"/>
      <path d="M15 9l4.5-4.5"/>
    </svg>
  );
}

function IconUser() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
      <circle cx="12" cy="7" r="4"/>
    </svg>
  );
}


function App() {
  const [parts, setParts] = useState([]);
  const [kits, setKits] = useState([]);
  const [issues, setIssues] = useState([]);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [activePage, setActivePage] = useState("Dashboard");

  // Persistent Dark Mode with localStorage
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("partspal_theme");
    if (saved !== null) {
      return saved === "dark";
    }
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // Mobile menu drawer state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Issues Modal & Form State
  const [issueModalOpen, setIssueModalOpen] = useState(false);
  const [issueMode, setIssueMode] = useState("part"); // "part" | "kit"
  const [memberName, setMemberName] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [dueDate, setDueDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 7);
    return d.toISOString().split("T")[0];
  });
  const [selectedKitId, setSelectedKitId] = useState("");
  const [selectedPartId, setSelectedPartId] = useState("");
  const [issueQuantity, setIssueQuantity] = useState(1);

  // Add Stock Modal State
  const [stockModalOpen, setStockModalOpen] = useState(false);
  const [stockPartId, setStockPartId] = useState("");
  const [stockAddQuantity, setStockAddQuantity] = useState("");

  // Notification State & Click Outside Listener
  const [notificationOpen, setNotificationOpen] = useState(false);
  const notificationRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setNotificationOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Toast Notification State
  const [toast, setToast] = useState(null);

  useEffect(() => {
    fetchParts();
    fetchKits();
    fetchIssues();
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("partspal_theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("partspal_theme", "light");
    }
  }, [darkMode]);

  async function fetchParts() {
    try {
      const response = await fetch("http://localhost:5000/api/parts");
      const data = await response.json();
      setParts(data);
    } catch (error) {
      console.error("Failed to load parts:", error);
    }
  }

  async function fetchKits() {
    try {
      const response = await fetch("http://localhost:5000/api/kits");
      const data = await response.json();
      setKits(data);
    } catch (error) {
      console.error("Failed to load kits:", error);
    }
  }

  async function fetchIssues() {
    try {
      const response = await fetch("http://localhost:5000/api/issues");
      const data = await response.json();
      setIssues(data);
    } catch (error) {
      console.error("Failed to load issues:", error);
    }
  }

  const showToast = (message, type = "success") => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 3500);
  };

  const categories = [...new Set(parts.map(part => part.category))];

  const filteredParts = parts.filter(part => {
    const matchesSearch = part.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "" || part.category === category;

    return matchesSearch && matchesCategory;
  });

  const totalUnits = parts.reduce((sum, part) => sum + part.total, 0);
  const availableUnits = parts.reduce((sum, part) => sum + part.available, 0);
  const issuedUnits = totalUnits - availableUnits;
  const lowStock = parts.filter(part => part.available <= part.total * 0.25).length;

  const handleNavClick = (page) => {
    setActivePage(page);
    setMobileMenuOpen(false);
  };

  // Kit Validation Logic for Modal
  const selectedKit = kits.find(k => k.id === Number(selectedKitId));

  const kitValidation = selectedKit ? selectedKit.parts.map(kp => {
    const invPart = parts.find(p => p.id === kp.id || p.name.toLowerCase() === kp.name.toLowerCase());
    const available = invPart ? invPart.available : 0;
    const isAvailable = available >= kp.quantity;
    return {
      partId: kp.id,
      name: kp.name,
      required: kp.quantity,
      available: available,
      isAvailable
    };
  }) : [];

  const isKitAvailable = selectedKit && kitValidation.length > 0 && kitValidation.every(v => v.isAvailable);
  const unavailableParts = kitValidation.filter(v => !v.isAvailable);

  // Individual Part Validation Logic for Modal
  const selectedPart = parts.find(p => p.id === Number(selectedPartId));
  const selectedPartAvailable = selectedPart ? selectedPart.available : 0;
  const isPartAvailable = selectedPart && selectedPartAvailable > 0 && issueQuantity >= 1 && issueQuantity <= selectedPartAvailable;

  // Add Stock Selection & Submission
  const selectedStockPart = parts.find(p => p.id === Number(stockPartId));

  const handleAddStockSubmit = async (e) => {
    e.preventDefault();
    const qty = Number(stockAddQuantity);
    if (!stockPartId || !Number.isInteger(qty) || qty <= 0) {
      showToast("Please enter a valid positive quantity", "error");
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/api/parts/${stockPartId}/stock`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ quantity: qty })
      });

      const data = await response.json();

      if (response.ok) {
        setStockModalOpen(false);
        setStockPartId("");
        setStockAddQuantity("");
        fetchParts();
        showToast(data.message || `${qty} units added to inventory`, "success");
      } else {
        showToast(data.message || "Failed to add stock", "error");
      }
    } catch (error) {
      console.error("Add stock error:", error);
      showToast("Server connection failed", "error");
    }
  };

  const resetModalForm = () => {
    setMemberName("");
    setRegistrationNumber("");
    setSelectedKitId("");
    setSelectedPartId("");
    setIssueQuantity(1);
    setIssueMode("part");
    const d = new Date();
    d.setDate(d.getDate() + 7);
    setDueDate(d.toISOString().split("T")[0]);
  };

  const handleIssueSubmit = async (e) => {
    e.preventDefault();
    if (!memberName || !registrationNumber || !dueDate) {
      return;
    }

    if (issueMode === "part") {
      if (!selectedPartId || !isPartAvailable) {
        return;
      }

      try {
        const response = await fetch("http://localhost:5000/api/issues", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            memberName,
            registrationNumber,
            dueDate,
            partId: Number(selectedPartId),
            quantity: issueQuantity
          })
        });

        const data = await response.json();

        if (response.ok) {
          setIssueModalOpen(false);
          resetModalForm();
          fetchIssues();
          fetchParts();
          showToast("Part issued successfully", "success");
        } else {
          showToast(data.message || "Failed to issue part", "error");
        }
      } catch (error) {
        console.error("Part issue submission error:", error);
        showToast("Server connection failed", "error");
      }
    } else {
      if (!selectedKitId || !isKitAvailable) {
        return;
      }

      try {
        const response = await fetch("http://localhost:5000/api/issues", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            memberName,
            registrationNumber,
            dueDate,
            kitId: Number(selectedKitId)
          })
        });

        const data = await response.json();

        if (response.ok) {
          setIssueModalOpen(false);
          resetModalForm();
          fetchIssues();
          fetchParts();
          showToast("Kit issued successfully", "success");
        } else {
          showToast(data.message || "Failed to issue kit", "error");
        }
      } catch (error) {
        console.error("Kit issue submission error:", error);
        showToast("Server connection failed", "error");
      }
    }
  };

  const handleReturnIssue = async (issue) => {
    const isPart = Boolean(issue.part_id);
    const itemName = issue.item_name || (isPart ? issue.part_name : issue.kit_name) || "item";
    const confirmMessage = isPart
      ? `Are you sure you want to return ${issue.quantity} x "${itemName}" to stock?`
      : `Are you sure you want to return the "${itemName}" kit to stock?`;

    if (!window.confirm(confirmMessage)) {
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/api/issues/${issue.id}/return`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" }
      });

      const data = await response.json();

      if (response.ok) {
        fetchIssues();
        fetchParts();
        showToast(isPart ? "Part returned successfully" : "Kit returned successfully", "success");
      } else {
        showToast(data.message || "Failed to return item", "error");
      }
    } catch (error) {
      console.error("Return error:", error);
      showToast("Failed to connect to server", "error");
    }
  };

  // Dynamic Notifications Computation
  const todayStr = new Date().toISOString().split("T")[0];
  const notifications = [];

  // 1. Low stock parts (available <= 20% of total)
  parts.forEach((p) => {
    if (p.total > 0 && p.available <= p.total * 0.20) {
      notifications.push({
        id: `low-stock-${p.id}`,
        type: "low_stock",
        title: "Low Stock Alert",
        message: `${p.name} is running low (${p.available}/${p.total} available).`,
        time: "Low Stock"
      });
    }
  });

  // 2. Overdue issues (returned === 0 and due_date < todayStr)
  issues.forEach((i) => {
    const isPart = Boolean(i.part_id);
    const name = i.item_name || (isPart ? i.part_name : i.kit_name) || "Item";
    if (i.returned === 0 && i.due_date < todayStr) {
      notifications.push({
        id: `overdue-${i.id}`,
        type: "overdue",
        title: "Overdue Item",
        message: `${name} issued to ${i.member_name} is overdue (due ${i.due_date}).`,
        time: "Overdue"
      });
    }
  });

  // 3. Recently issued active items (returned === 0 and due_date >= todayStr)
  issues.forEach((i) => {
    const isPart = Boolean(i.part_id);
    const name = i.item_name || (isPart ? i.part_name : i.kit_name) || "Item";
    if (i.returned === 0 && i.due_date >= todayStr) {
      notifications.push({
        id: `active-${i.id}`,
        type: "issue",
        title: "Active Issue",
        message: `${name} issued to ${i.member_name} (due ${i.due_date}).`,
        time: "Active"
      });
    }
  });

  // 4. Recently returned items (returned === 1)
  issues.forEach((i) => {
    const isPart = Boolean(i.part_id);
    const name = i.item_name || (isPart ? i.part_name : i.kit_name) || "Item";
    if (i.returned === 1) {
      notifications.push({
        id: `returned-${i.id}`,
        type: "returned",
        title: "Returned Item",
        message: `${name} issued to ${i.member_name} has been returned.`,
        time: "Returned"
      });
    }
  });

  // Member History & Issues Search State
  const [issueSearch, setIssueSearch] = useState("");
  const [historyModalOpen, setHistoryModalOpen] = useState(false);
  const [selectedMemberHistory, setSelectedMemberHistory] = useState(null);

  // Filtered Issues Calculation
  const filteredIssues = issues.filter((issue) => {
    if (!issueSearch.trim()) return true;
    const query = issueSearch.toLowerCase();
    const matchesName = issue.member_name ? issue.member_name.toLowerCase().includes(query) : false;
    const matchesReg = issue.registration_number ? issue.registration_number.toLowerCase().includes(query) : false;
    return matchesName || matchesReg;
  });

  // Dynamic Issues Summary Stats (calculated from filtered issues)
  const issuesStats = {
    total: filteredIssues.length,
    active: filteredIssues.filter(i => i.returned === 0 && i.due_date >= todayStr).length,
    returned: filteredIssues.filter(i => i.returned === 1).length,
    overdue: filteredIssues.filter(i => i.returned === 0 && i.due_date < todayStr).length
  };

  // Status helper logic for issue items
  const getIssueStatus = (issue) => {
    if (issue.returned === 1) {
      return { label: "Returned", badgeClass: "badge-gray", isOverdue: false };
    }

    if (issue.due_date < todayStr) {
      return { label: "Overdue", badgeClass: "badge-danger", isOverdue: true };
    }

    return { label: "Active", badgeClass: "badge-success", isOverdue: false };
  };

  return (
    <div className="app">
      {/* Toast Notification Banner */}
      {toast && (
        <div className={`toast-notification ${toast.type}`}>
          <span>{toast.type === "success" ? "✓" : "!"}</span>
          <p>{toast.message}</p>
        </div>
      )}

      {/* Mobile Drawer Backdrop */}
      {mobileMenuOpen && (
        <div
          className="sidebar-backdrop"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar Navigation */}
      <aside className={`sidebar ${mobileMenuOpen ? "mobile-open" : ""}`}>
        <div className="logo-area">
          <div className="logo-icon" aria-hidden="true">
            <IconGear />
          </div>

          <div>
            <h1>PartsPal</h1>
            <p>Robotics Lab System</p>
          </div>

          <button
            className="mobile-close-btn"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <IconClose />
          </button>
        </div>

        <div className="menu-title">MAIN MENU</div>

        <nav>
          <button
            className={activePage === "Dashboard" ? "nav-item active" : "nav-item"}
            onClick={() => handleNavClick("Dashboard")}
          >
            <span className="nav-icon"><IconDashboard /></span>
            <span>Dashboard</span>
          </button>

          <button
            className={activePage === "Inventory" ? "nav-item active" : "nav-item"}
            onClick={() => handleNavClick("Inventory")}
          >
            <span className="nav-icon"><IconInventory /></span>
            <span>Inventory</span>
          </button>

          <button
            className={activePage === "Kits" ? "nav-item active" : "nav-item"}
            onClick={() => handleNavClick("Kits")}
          >
            <span className="nav-icon"><IconKits /></span>
            <span>Kits</span>
          </button>

          <button
            className={activePage === "Issues" ? "nav-item active" : "nav-item"}
            onClick={() => handleNavClick("Issues")}
          >
            <span className="nav-icon"><IconIssues /></span>
            <span>Issues</span>
          </button>

          <button
            className={activePage === "Members" ? "nav-item active" : "nav-item"}
            onClick={() => handleNavClick("Members")}
          >
            <span className="nav-icon"><IconMembers /></span>
            <span>Members</span>
          </button>
        </nav>

        <div className="sidebar-bottom">
          <button
            className={activePage === "Settings" ? "nav-item active" : "nav-item"}
            onClick={() => handleNavClick("Settings")}
          >
            <span className="nav-icon"><IconSettings /></span>
            <span>Settings</span>
          </button>

          <div className="user-card">
            <div className="avatar">V</div>

            <div className="user-info">
              <strong>Lab Admin</strong>
              <small>Administrator</small>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="main-content">
        <header className="topbar">
          <div className="topbar-left">
            <button
              className="mobile-toggle-btn"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <IconMenu />
            </button>

            <div className="mobile-logo">
              <div className="logo-icon">
                <IconGear />
              </div>
              <strong>PartsPal</strong>
            </div>
          </div>

          <div className="topbar-right">
            <div className="system-status">
              <span className="pulse-dot" aria-hidden="true" />
              <span>System Online</span>
            </div>

            <button
              className="icon-btn theme-toggle"
              onClick={() => setDarkMode(!darkMode)}
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? <IconSun /> : <IconMoon />}
            </button>

            {/* Functional Notifications Wrapper */}
            <div className="notification-wrapper" ref={notificationRef}>
              <button
                className={`icon-btn notification-btn ${notificationOpen ? "active" : ""}`}
                onClick={() => setNotificationOpen(!notificationOpen)}
                aria-label="Notifications"
                title="Notifications"
              >
                <IconBell />
                {notifications.length > 0 && (
                  <span className="notification-badge-count">{notifications.length}</span>
                )}
              </button>

              {notificationOpen && (
                <div className="notification-panel">
                  <div className="notification-header">
                    <div>
                      <h4>Notifications</h4>
                      <p>{notifications.length} {notifications.length === 1 ? "update" : "updates"}</p>
                    </div>
                  </div>

                  <div className="notification-list">
                    {notifications.length === 0 ? (
                      <div className="notification-empty">
                        <span className="empty-check-icon">✓</span>
                        <strong>You're all caught up</strong>
                        <p>No low stock parts or overdue items at this time.</p>
                      </div>
                    ) : (
                      notifications.map((item) => (
                        <div className={`notification-item ${item.type}`} key={item.id}>
                          <div className="notification-icon-col">
                            {item.type === "low_stock" && <IconAlertTriangle />}
                            {item.type === "overdue" && <IconAlertTriangle />}
                            {item.type === "issue" && <IconKits />}
                            {item.type === "returned" && <IconCheck />}
                          </div>
                          <div className="notification-content-col">
                            <div className="notification-title-row">
                              <strong>{item.title}</strong>
                              <span className="notification-time">{item.time}</span>
                            </div>
                            <p>{item.message}</p>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>

        <div className="page-content">
          {activePage === "Dashboard" && (
            <>
              <section className="welcome">
                <div>
                  <p className="page-label">OVERVIEW</p>
                  <h2>Welcome back 👋</h2>
                  <p>Here's what's happening with your robotics lab today.</p>
                </div>

                <button
                  className="primary-button"
                  onClick={() => {
                    setActivePage("Inventory");
                    setStockPartId("");
                    setStockAddQuantity("");
                    setStockModalOpen(true);
                  }}
                >
                  <span style={{ fontSize: "15px", fontWeight: "700" }}>+</span> Add / Manage Parts
                </button>
              </section>

              <section className="stats-grid">
                <div className="dashboard-card">
                  <div className="card-icon blue">
                    <IconTotal />
                  </div>
                  <div className="stat-content">
                    <span>Total Units</span>
                    <strong>{totalUnits}</strong>
                    <small>Across all parts</small>
                  </div>
                </div>

                <div className="dashboard-card">
                  <div className="card-icon green">
                    <IconCheck />
                  </div>
                  <div className="stat-content">
                    <span>Available</span>
                    <strong>{availableUnits}</strong>
                    <small>Ready to issue</small>
                  </div>
                </div>

                <div
                  className="dashboard-card clickable-card"
                  onClick={() => setActivePage("Issues")}
                >
                  <div className="card-icon orange">
                    <IconArrowUpRight />
                  </div>
                  <div className="stat-content">
                    <span>Currently Issued</span>
                    <strong>{issuedUnits}</strong>
                    <small>With members ({issues.filter(i => i.returned === 0).length} active)</small>
                  </div>
                </div>

                <div className="dashboard-card">
                  <div className="card-icon red">
                    <IconAlertTriangle />
                  </div>
                  <div className="stat-content">
                    <span>Low Stock</span>
                    <strong>{lowStock}</strong>
                    <small>Need attention</small>
                  </div>
                </div>
              </section>

              <section className="content-card">
                <div className="section-header">
                  <div>
                    <h3>Inventory Overview</h3>
                    <p>Current status of your robotics components</p>
                  </div>

                  <button
                    className="view-button"
                    onClick={() => setActivePage("Inventory")}
                  >
                    View all →
                  </button>
                </div>

                <div className="inventory-table-container">
                  <div className="inventory-table-header">
                    <span>PART NAME</span>
                    <span>STOCK STATUS</span>
                    <span>AVAILABILITY</span>
                    <span style={{ textAlign: "right" }}>STATUS</span>
                  </div>

                  <div className="inventory-list">
                    {parts.slice(0, 5).map((part) => {
                      const percent = Math.min(100, Math.max(0, (part.available / part.total) * 100));
                      const isLow = part.available <= part.total * 0.25;

                      return (
                        <div className="inventory-row" key={part.id}>
                          <div className="part-name">
                            <div className="small-part-icon">
                              <IconBolt />
                            </div>
                            <div>
                              <strong>{part.name}</strong>
                              <span>{part.category}</span>
                            </div>
                          </div>

                          <div className="stock-column">
                            <span>Available</span>
                            <strong>
                              {part.available} <span className="total-denom">/ {part.total}</span>
                            </strong>
                          </div>

                          <div className="progress-container">
                            <div className="progress-bar">
                              <div
                                className={`progress-fill ${isLow ? "low-fill" : ""}`}
                                style={{ width: `${percent}%` }}
                              />
                            </div>
                            <span className="percent-text">{Math.round(percent)}%</span>
                          </div>

                          <div className="availability">
                            {part.available > 0 ? (
                              <span className={`badge ${isLow ? "badge-warning" : "badge-success"}`}>
                                {isLow ? "Low Stock" : "Available"}
                              </span>
                            ) : (
                              <span className="badge badge-danger">Out of stock</span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </section>
            </>
          )}

          {activePage === "Inventory" && (
            <section>
              <div className="page-title">
                <div>
                  <p className="page-label">INVENTORY</p>
                  <h2>Parts Inventory</h2>
                  <p>Manage all robotics components in the lab.</p>
                </div>

                <button
                  className="primary-button"
                  onClick={() => {
                    setStockPartId("");
                    setStockAddQuantity("");
                    setStockModalOpen(true);
                  }}
                >
                  <span style={{ fontSize: "15px", fontWeight: "700" }}>+</span> Add Stock
                </button>
              </div>

              <div className="content-card">
                <div className="filters">
                  <div className="search-box">
                    <span className="search-icon"><IconSearch /></span>
                    <input
                      type="text"
                      placeholder="Search parts by name..."
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                    {search && (
                      <button
                        className="clear-search"
                        onClick={() => setSearch("")}
                        aria-label="Clear search"
                      >
                        ×
                      </button>
                    )}
                  </div>

                  <div className="select-wrapper">
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      <option value="">All Categories ({parts.length})</option>
                      {categories.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {filteredParts.length === 0 ? (
                  <div className="empty-state">
                    <p>No robotics components match your search filter.</p>
                  </div>
                ) : (
                  <div className="parts-grid">
                    {filteredParts.map((part) => {
                      const percent = Math.min(100, Math.max(0, (part.available / part.total) * 100));
                      const isLow = part.available <= part.total * 0.25;

                      return (
                        <div className="part-card" key={part.id}>
                          <div className="part-top">
                            <div className="part-icon">
                              <IconBolt />
                            </div>

                            {isLow && (
                              <span className="badge badge-warning">Low Stock</span>
                            )}
                          </div>

                          <h4>{part.name}</h4>
                          <span className="category-pill">{part.category}</span>

                          <div className="stock-info">
                            <div>
                              <span>Available</span>
                              <strong className={part.available === 0 ? "zero-count" : ""}>
                                {part.available}
                              </strong>
                            </div>

                            <div>
                              <span>Total Stock</span>
                              <strong>{part.total}</strong>
                            </div>
                          </div>

                          <div className="stock-bar">
                            <div
                              className={`progress-fill ${isLow ? "low-fill" : ""}`}
                              style={{ width: `${percent}%` }}
                            />
                          </div>

                          <button
                            className="secondary-btn"
                            style={{ marginTop: "12px", width: "100%" }}
                            onClick={() => {
                              setStockPartId(String(part.id));
                              setStockAddQuantity("");
                              setStockModalOpen(true);
                            }}
                          >
                            + Add Stock
                          </button>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </section>
          )}

          {activePage === "Issues" && (
            <section>
              <div className="page-title">
                <div>
                  <p className="page-label">ISSUES MANAGEMENT</p>
                  <h2>Issues</h2>
                  <p>Track parts and kits currently issued to members.</p>
                </div>

                <button
                  className="primary-button"
                  onClick={() => {
                    resetModalForm();
                    setIssueModalOpen(true);
                  }}
                >
                  <span style={{ fontSize: "15px", fontWeight: "700" }}>+</span> Issue Parts / Kit
                </button>
              </div>

              <div className="content-card">
                {/* Search Bar & Dynamic Summary Stats */}
                <div className="issues-stats-bar">
                  <div className="stat-pill">
                    <span>Total Issues</span>
                    <strong>{issuesStats.total}</strong>
                  </div>
                  <div className="stat-pill active-pill">
                    <span>Active</span>
                    <strong>{issuesStats.active}</strong>
                  </div>
                  <div className="stat-pill returned-pill">
                    <span>Returned</span>
                    <strong>{issuesStats.returned}</strong>
                  </div>
                  <div className="stat-pill overdue-pill">
                    <span>Overdue</span>
                    <strong>{issuesStats.overdue}</strong>
                  </div>
                </div>

                <div className="filters" style={{ marginBottom: "16px" }}>
                  <div className="search-box">
                    <span className="search-icon"><IconSearch /></span>
                    <input
                      type="text"
                      placeholder="Search issues by member name or registration number..."
                      value={issueSearch}
                      onChange={(e) => setIssueSearch(e.target.value)}
                    />
                    {issueSearch && (
                      <button
                        className="clear-search"
                        onClick={() => setIssueSearch("")}
                        aria-label="Clear search"
                      >
                        ×
                      </button>
                    )}
                  </div>
                </div>

                {filteredIssues.length === 0 ? (
                  <div className="empty-state">
                    <div className="empty-icon">
                      <IconKits />
                    </div>
                    <h3>No issues found</h3>
                    <p>{issueSearch ? `No issue records match "${issueSearch}".` : "All robotics components are currently available in the lab."}</p>
                    <button
                      className="primary-button"
                      style={{ marginTop: "16px" }}
                      onClick={() => {
                        resetModalForm();
                        setIssueModalOpen(true);
                      }}
                    >
                      + Issue Parts / Kit
                    </button>
                  </div>
                ) : (
                  <div className="inventory-table-container">
                    <div className="issues-table-header">
                      <span>MEMBER</span>
                      <span>REGISTRATION NO.</span>
                      <span>ITEM / KIT</span>
                      <span>QUANTITY</span>
                      <span>DUE DATE</span>
                      <span>STATUS</span>
                      <span style={{ textAlign: "right" }}>ACTION</span>
                    </div>

                    <div className="issues-list">
                      {filteredIssues.map((issue) => {
                        const status = getIssueStatus(issue);
                        const isPart = Boolean(issue.part_id);
                        const itemName = issue.item_name || (isPart ? issue.part_name : issue.kit_name);

                        return (
                          <div className="issues-row" key={issue.id}>
                            <div className="member-col">
                              <div className="member-avatar">
                                <IconUser />
                              </div>
                              <div>
                                <strong>{issue.member_name}</strong>
                              </div>
                            </div>

                            <div className="reg-col">
                              <code>{issue.registration_number}</code>
                            </div>

                            <div className="kit-col">
                              <span className="kit-tag">
                                {isPart ? <IconBolt /> : <IconKits />} {itemName}
                              </span>
                            </div>

                            <div className="qty-col">
                              <span>{isPart ? issue.quantity : "Kit"}</span>
                            </div>

                            <div className="date-col">
                              <span>{issue.due_date}</span>
                            </div>

                            <div className="status-col">
                              <span className={`badge ${status.badgeClass}`}>
                                {status.isOverdue && <IconAlertTriangle />}
                                {status.label}
                              </span>
                            </div>

                            <div className="action-col" style={{ display: "flex", gap: "6px", alignItems: "center", justifyContent: "flex-end" }}>
                              <button
                                className="secondary-btn action-btn"
                                onClick={() => {
                                  setSelectedMemberHistory({
                                    memberName: issue.member_name,
                                    registrationNumber: issue.registration_number
                                  });
                                  setHistoryModalOpen(true);
                                }}
                                title="View member history"
                              >
                                View History
                              </button>

                              {issue.returned === 1 ? (
                                <span className="returned-text">Returned</span>
                              ) : (
                                <button
                                  className="secondary-btn action-btn"
                                  onClick={() => handleReturnIssue(issue)}
                                >
                                  Return
                                </button>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </section>
          )}

          {activePage === "Kits" && (
            <section>
              <div className="page-title">
                <div>
                  <p className="page-label">ROBOTICS KITS</p>
                  <h2>Lab Kits</h2>
                  <p>Pre-configured component kits for robotics projects.</p>
                </div>

                <button
                  className="primary-button"
                  onClick={() => {
                    resetModalForm();
                    setIssueMode("kit");
                    setActivePage("Issues");
                    setIssueModalOpen(true);
                  }}
                >
                  + Issue Kit
                </button>
              </div>

              <div className="parts-grid">
                {kits.map((kit) => (
                  <div className="part-card" key={kit.id}>
                    <div className="part-top">
                      <div className="part-icon">
                        <IconKits />
                      </div>
                      <span className="badge badge-gray">{kit.parts.length} Components</span>
                    </div>

                    <h4>{kit.name}</h4>
                    <p className="kit-subtitle">Standard Lab Issue Kit</p>

                    <div className="kit-parts-list">
                      {kit.parts.map((p) => (
                        <div className="kit-part-item" key={p.id}>
                          <span>{p.name}</span>
                          <strong>x{p.quantity}</strong>
                        </div>
                      ))}
                    </div>

                    <button
                      className="secondary-btn"
                      style={{ marginTop: "16px", width: "100%" }}
                      onClick={() => {
                        resetModalForm();
                        setSelectedKitId(String(kit.id));
                        setIssueMode("kit");
                        setActivePage("Issues");
                        setIssueModalOpen(true);
                      }}
                    >
                      Issue This Kit
                    </button>
                  </div>
                ))}
              </div>
            </section>
          )}

          {activePage !== "Dashboard" &&
            activePage !== "Inventory" &&
            activePage !== "Issues" &&
            activePage !== "Kits" && (
              <section className="coming-soon">
                <div className="coming-icon">
                  <IconRocket />
                </div>

                <p className="page-label">{activePage.toUpperCase()}</p>
                <h2>{activePage}</h2>
                <p>This section will be connected to the PartsPal backend next.</p>
              </section>
            )}
        </div>
      </main>

      {/* ADD STOCK MODAL */}
      {stockModalOpen && (
        <div className="modal-backdrop" onClick={() => setStockModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <h3>Add Stock to Inventory</h3>
                <p>Increase total and available quantity for an existing part.</p>
              </div>
              <button
                className="modal-close"
                onClick={() => setStockModalOpen(false)}
                aria-label="Close modal"
              >
                <IconClose />
              </button>
            </div>

            <form onSubmit={handleAddStockSubmit} className="modal-body">
              <div className="form-group">
                <label>Select Existing Part *</label>
                <select
                  value={stockPartId}
                  onChange={(e) => setStockPartId(e.target.value)}
                  required
                >
                  <option value="">-- Choose a Part --</option>
                  {parts.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name} (Current Total: {p.total}, Available: {p.available})
                    </option>
                  ))}
                </select>
              </div>

              {selectedStockPart && (
                <div className="part-selection-details">
                  <div className="detail-row">
                    <span>Current Total Stock:</span>
                    <strong>{selectedStockPart.total}</strong>
                  </div>
                  <div className="detail-row">
                    <span>Current Available Stock:</span>
                    <strong>{selectedStockPart.available}</strong>
                  </div>
                  <div className="detail-row">
                    <span>New Total Stock:</span>
                    <strong className="avail-count">
                      {selectedStockPart.total + (Number(stockAddQuantity) > 0 ? Number(stockAddQuantity) : 0)}
                    </strong>
                  </div>
                  <div className="detail-row">
                    <span>New Available Stock:</span>
                    <strong className="avail-count">
                      {selectedStockPart.available + (Number(stockAddQuantity) > 0 ? Number(stockAddQuantity) : 0)}
                    </strong>
                  </div>
                </div>
              )}

              <div className="form-group">
                <label>Quantity to Add *</label>
                <input
                  type="number"
                  min="1"
                  step="1"
                  placeholder="e.g. 5"
                  value={stockAddQuantity}
                  onChange={(e) => setStockAddQuantity(e.target.value)}
                  required
                />
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="secondary-btn"
                  onClick={() => setStockModalOpen(false)}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="primary-button"
                  disabled={
                    !stockPartId ||
                    !stockAddQuantity ||
                    Number(stockAddQuantity) <= 0 ||
                    !Number.isInteger(Number(stockAddQuantity))
                  }
                >
                  Add Stock
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ISSUE PARTS / KIT MODAL */}
      {issueModalOpen && (
        <div className="modal-backdrop" onClick={() => setIssueModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <h3>Issue Parts / Kit</h3>
                <p>Assign individual components or complete kits to club members.</p>
              </div>
              <button
                className="modal-close"
                onClick={() => setIssueModalOpen(false)}
                aria-label="Close modal"
              >
                <IconClose />
              </button>
            </div>

            <div className="modal-body">
              {/* Mode Toggle Switcher */}
              <div className="modal-tab-toggle">
                <button
                  type="button"
                  className={`tab-btn ${issueMode === "part" ? "active" : ""}`}
                  onClick={() => setIssueMode("part")}
                >
                  Individual Part
                </button>
                <button
                  type="button"
                  className={`tab-btn ${issueMode === "kit" ? "active" : ""}`}
                  onClick={() => setIssueMode("kit")}
                >
                  Kit
                </button>
              </div>

              <form onSubmit={handleIssueSubmit} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                <div className="form-group">
                  <label>Member Name *</label>
                  <input
                    type="text"
                    placeholder="e.g. Rahul Sharma"
                    value={memberName}
                    onChange={(e) => setMemberName(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Registration Number *</label>
                  <input
                    type="text"
                    placeholder="e.g. RA2111003010001"
                    value={registrationNumber}
                    onChange={(e) => setRegistrationNumber(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Due Date *</label>
                  <input
                    type="date"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    required
                  />
                </div>

                {issueMode === "part" ? (
                  <>
                    <div className="form-group">
                      <label>Select Part *</label>
                      <select
                        value={selectedPartId}
                        onChange={(e) => {
                          setSelectedPartId(e.target.value);
                          setIssueQuantity(1);
                        }}
                        required
                      >
                        <option value="">-- Choose a Part --</option>
                        {parts.map((part) => (
                          <option key={part.id} value={part.id}>
                            {part.name} ({part.available} available)
                          </option>
                        ))}
                      </select>
                    </div>

                    {selectedPart && (
                      <div className="part-selection-details">
                        <div className="detail-row">
                          <span>Part:</span>
                          <strong>{selectedPart.name}</strong>
                        </div>

                        <div className="detail-row">
                          <span>Available:</span>
                          <strong className={selectedPart.available === 0 ? "short-count" : "avail-count"}>
                            {selectedPart.available}
                          </strong>
                        </div>

                        <div className="detail-row qty-row">
                          <span>Quantity:</span>
                          <div className="qty-stepper">
                            <button
                              type="button"
                              className="stepper-btn"
                              disabled={issueQuantity <= 1 || selectedPart.available === 0}
                              onClick={() => setIssueQuantity(q => Math.max(1, q - 1))}
                            >
                              -
                            </button>
                            <span className="qty-value">{selectedPart.available > 0 ? issueQuantity : 0}</span>
                            <button
                              type="button"
                              className="stepper-btn"
                              disabled={selectedPart.available === 0 || issueQuantity >= selectedPart.available}
                              onClick={() => setIssueQuantity(q => Math.min(selectedPart.available, q + 1))}
                            >
                              +
                            </button>
                          </div>
                        </div>

                        {selectedPart.available === 0 && (
                          <div className="validation-banner error-banner">
                            <span>!</span>
                            <div>
                              <strong>Out of stock</strong>
                              <p>This part is currently unavailable.</p>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    <div className="form-group">
                      <label>Select Robotics Kit *</label>
                      <select
                        value={selectedKitId}
                        onChange={(e) => setSelectedKitId(e.target.value)}
                        required
                      >
                        <option value="">-- Choose a Kit --</option>
                        {kits.map((kit) => (
                          <option key={kit.id} value={kit.id}>
                            {kit.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    {selectedKit && (
                      <div className="kit-summary-box">
                        <div className="kit-summary-header">
                          <strong>{selectedKit.name} Required Components</strong>
                        </div>

                        <div className="kit-summary-list">
                          {kitValidation.map((item) => (
                            <div
                              className={`kit-summary-row ${!item.isAvailable ? "unavail-row" : ""}`}
                              key={item.partId}
                            >
                              <div className="part-name-info">
                                <span>{item.name}</span>
                              </div>

                              <div className="part-stock-details">
                                <span className="req-count">Req: {item.required}</span>
                                <span className={item.isAvailable ? "avail-count" : "short-count"}>
                                  {item.available} available
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>

                        {isKitAvailable ? (
                          <div className="validation-banner success-banner">
                            <span>✓</span>
                            <div>
                              <strong>Kit available</strong>
                              <p>All required components are currently in stock.</p>
                            </div>
                          </div>
                        ) : (
                          <div className="validation-banner error-banner">
                            <span>!</span>
                            <div>
                              <strong>Cannot issue kit</strong>
                              {unavailableParts.map((p) => (
                                <p key={p.partId}>
                                  <strong>{p.name}</strong> — Required: {p.required}, Available: {p.available}
                                </p>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </>
                )}

                <div className="modal-footer">
                  <button
                    type="button"
                    className="secondary-btn"
                    onClick={() => setIssueModalOpen(false)}
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="primary-button"
                    disabled={
                      !memberName ||
                      !registrationNumber ||
                      !dueDate ||
                      (issueMode === "part" ? (!selectedPartId || !isPartAvailable) : (!selectedKitId || !isKitAvailable))
                    }
                  >
                    {issueMode === "part" ? "Issue Part" : "Issue Kit"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      {/* MEMBER ISSUE HISTORY MODAL */}
      {historyModalOpen && selectedMemberHistory && (
        <div className="modal-backdrop" onClick={() => setHistoryModalOpen(false)}>
          <div className="modal-content" style={{ maxWidth: "680px" }} onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <h3>Member Issue History</h3>
                <p>Complete record of parts and kits assigned to this member.</p>
              </div>
              <button
                className="modal-close"
                onClick={() => setHistoryModalOpen(false)}
                aria-label="Close modal"
              >
                <IconClose />
              </button>
            </div>

            <div className="modal-body">
              {/* Member Profile Header */}
              <div className="member-history-profile">
                <div className="member-profile-info">
                  <div className="member-avatar" style={{ width: "38px", height: "38px", fontSize: "16px" }}>
                    <IconUser />
                  </div>
                  <div>
                    <h4 style={{ fontSize: "15px", fontWeight: "700", margin: "0", color: "var(--text-primary)" }}>
                      {selectedMemberHistory.memberName}
                    </h4>
                    <code>{selectedMemberHistory.registrationNumber}</code>
                  </div>
                </div>

                {/* Member specific stats breakdown */}
                {(() => {
                  const memberIssues = issues.filter(
                    (i) =>
                      (i.member_name && i.member_name.toLowerCase() === selectedMemberHistory.memberName.toLowerCase()) ||
                      (i.registration_number && i.registration_number.toLowerCase() === selectedMemberHistory.registrationNumber.toLowerCase())
                  );
                  const mTotal = memberIssues.length;
                  const mActive = memberIssues.filter((i) => i.returned === 0 && i.due_date >= todayStr).length;
                  const mReturned = memberIssues.filter((i) => i.returned === 1).length;
                  const mOverdue = memberIssues.filter((i) => i.returned === 0 && i.due_date < todayStr).length;

                  return (
                    <div className="member-stats-row">
                      <div className="m-stat-box">
                        <span>Total Items</span>
                        <strong>{mTotal}</strong>
                      </div>
                      <div className="m-stat-box">
                        <span>Active</span>
                        <strong className="avail-count">{mActive}</strong>
                      </div>
                      <div className="m-stat-box">
                        <span>Returned</span>
                        <strong>{mReturned}</strong>
                      </div>
                      <div className="m-stat-box">
                        <span>Overdue</span>
                        <strong className="short-count">{mOverdue}</strong>
                      </div>
                    </div>
                  );
                })()}
              </div>

              {/* Member History Table */}
              {(() => {
                const memberIssues = issues.filter(
                  (i) =>
                    (i.member_name && i.member_name.toLowerCase() === selectedMemberHistory.memberName.toLowerCase()) ||
                    (i.registration_number && i.registration_number.toLowerCase() === selectedMemberHistory.registrationNumber.toLowerCase())
                );

                if (memberIssues.length === 0) {
                  return (
                    <div className="empty-state" style={{ padding: "20px" }}>
                      <p>No issue history found for this member.</p>
                    </div>
                  );
                }

                return (
                  <div className="inventory-table-container" style={{ marginTop: "10px" }}>
                    <div
                      className="issues-table-header"
                      style={{ gridTemplateColumns: "1.8fr 0.8fr 1.2fr 1fr 1fr" }}
                    >
                      <span>ITEM / KIT</span>
                      <span>QTY</span>
                      <span>DUE DATE</span>
                      <span>STATUS</span>
                      <span style={{ textAlign: "right" }}>ACTION</span>
                    </div>

                    <div className="issues-list">
                      {memberIssues.map((issue) => {
                        const status = getIssueStatus(issue);
                        const isPart = Boolean(issue.part_id);
                        const itemName = issue.item_name || (isPart ? issue.part_name : issue.kit_name);

                        return (
                          <div
                            className="issues-row"
                            key={issue.id}
                            style={{ gridTemplateColumns: "1.8fr 0.8fr 1.2fr 1fr 1fr" }}
                          >
                            <div className="kit-col">
                              <span className="kit-tag">
                                {isPart ? <IconBolt /> : <IconKits />} {itemName}
                              </span>
                            </div>

                            <div className="qty-col">
                              <span>{isPart ? issue.quantity : "Kit"}</span>
                            </div>

                            <div className="date-col">
                              <span>{issue.due_date}</span>
                            </div>

                            <div className="status-col">
                              <span className={`badge ${status.badgeClass}`}>
                                {status.isOverdue && <IconAlertTriangle />}
                                {status.label}
                              </span>
                            </div>

                            <div className="action-col" style={{ textAlign: "right" }}>
                              {issue.returned === 1 ? (
                                <span className="returned-text">Returned</span>
                              ) : (
                                <button
                                  className="secondary-btn action-btn"
                                  onClick={() => handleReturnIssue(issue)}
                                >
                                  Return
                                </button>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })()}

              <div className="modal-footer">
                <button
                  type="button"
                  className="secondary-btn"
                  onClick={() => setHistoryModalOpen(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;