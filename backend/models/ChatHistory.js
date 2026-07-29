import mongoose from "mongoose";

const charHistorySchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    documentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Document',
        required: true  
    },
    messages: [
        {
            role: {
                type: String,
                enum: ['user', 'assistant'],
                required: true
            },
            content: {
                type: String,
                required: true
            },
            timestamp: {
                type: Date,
                default: Date.now
            },
            relevantChunks: {
                type: [Number],
                default: []
            }
        }
    ]
},{
    timestamps: true,
});

charHistorySchema.index({userId:1, documentId:1});

const ChatHistory = mongoose.model("ChatHistory", charHistorySchema);

export default ChatHistory;