import mongoose from "mongoose";

class MongoInit {
    private uri: string;
    public dbName: string;
    private isConnected: boolean = false;

    constructor(uri: string, dbName: string) {
        this.uri = uri;
        this.dbName = dbName;
        this.init();
    }

    private async init() {
        try {
            if (!this.uri) {
                throw new Error('Invalid or missing environment variable: "MONGODB_URI"');
            }

            if (!this.isConnected) {
                await this.connectToMongoDB();
                console.log("MongoDB Connected...")
                this.isConnected = true;
            } else {
                console.log("MongoDB is already connected");
            }
        } catch (error) {
            console.error(`MongoDB initialization error: ${error}`);
        }
    }

    private async connectToMongoDB() {
        try {
            mongoose.set("strictQuery", true);
            await mongoose.connect(this.uri, { dbName: this.dbName });
            this.isConnected = true;
        } catch (error) {
            console.error(`MongoDB connection error: ${error}`);
        }
    }
}

export default MongoInit;