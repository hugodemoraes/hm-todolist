import mongoose from 'mongoose'

export default mongoose.model('Todo', {
    text: {
        type: String,
        default: ''
    }
});
