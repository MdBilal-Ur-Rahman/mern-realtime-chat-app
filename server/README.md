server/
│
├── src/
│   │
│   ├── config/
│   │   ├── db.js
│   │   ├── cloudinary.js
│   │   └── socket.js
│   │
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   ├── user.controller.js
│   │   ├── chat.controller.js
│   │   ├── message.controller.js
│   │   └── upload.controller.js
│   │
│   ├── models/
│   │   ├── User.js
│   │   ├── Chat.js
│   │   ├── Message.js
│   │   └── Notification.js
│   │
│   ├── routes/
│   │   ├── auth.routes.js
│   │   ├── user.routes.js
│   │   ├── chat.routes.js
│   │   ├── message.routes.js
│   │   └── upload.routes.js
│   │
│   ├── middleware/
│   │   ├── auth.js
│   │   ├── upload.js
│   │   ├── errorHandler.js
│   │   └── validate.js
│   │
│   ├── services/
│   │   ├── auth.service.js
│   │   ├── chat.service.js
│   │   ├── message.service.js
│   │   ├── socket.service.js
│   │   └── upload.service.js
│   │
│   ├── sockets/
│   │   ├── socket.js
│   │   ├── onlineUsers.js
│   │   ├── message.socket.js
│   │   └── typing.socket.js
│   │
│   ├── utils/
│   │   ├── generateToken.js
│   │   ├── response.js
│   │   ├── asyncHandler.js
│   │   ├── ApiError.js
│   │   └── constants.js
│   │
│   ├── validators/
│   │   ├── auth.validator.js
│   │   ├── message.validator.js
│   │   └── chat.validator.js
│   │
│   ├── app.js
│   └── server.js
│
├── uploads/
│
├── .env
├── .gitignore
├── package.json
├── README.md
└── nodemon.json