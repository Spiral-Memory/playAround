
# 🕹️ Playaround - Real-Time Chat Application

Playaround is a simple and elegant real-time chat app built with vanilla JavaScript, socket.io, and a touch of style. It lets users join with a custom name and automatically assigns them a unique avatar using DiceBear. The UI is clean, mobile-friendly, and inspired by classic messaging interfaces.

---

## 🚀 Features

- Real-time messaging using [Socket.io](https://socket.io/)
- Unique avatars via [DiceBear Avatars API](https://www.dicebear.com/)
- Smooth user join and message notifications
- Custom name input with live avatar preview
- Notification sound toggle
- Minimalist chat UI with time and date display
- Mobile-friendly responsive layout

---

![Playaround](https://github.com/user-attachments/assets/456d7d85-876b-4c7f-ac3d-0217f4a4216c)

---

## 🛠️ Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js with Socket.io (served via Glitch)
- **Avatars**: DiceBear Bottts API
- **Sounds**: Custom audio for incoming and outgoing messages

---

## 🔧 How to Run Locally

1. **Clone the repo:**

```bash
git clone https://github.com/Spiral-Memory/playAround.git
cd playAround
````

2. **Set up a Socket.io server:**

Either:

* Use my existing Glitch server (e.g., `https://zchatserver.glitch.me/`)
* Or spin up a local Node.js server using the minimal setup provided in the Server_Code folder:

Run with:

```bash
npm install socket.io
node server.js
```

3. **Open index.html in a browser**

Ensure your `script.js` connects to the correct server URL (`io('http://localhost:3000')` or Glitch URL).

---

## 🤝 Credits

* [DiceBear Avatars](https://dicebear.com/)
* [Socket.io](https://socket.io/)
* [Glitch](https://glitch.com/) for quick backend deployment

---

## 🙌 Acknowledgments

Built with care by Zishan Ahmad, combining the elegance of traditional UI with the fluidity of modern web apps.
