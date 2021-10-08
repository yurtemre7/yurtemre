class Msg {

    key: string
    username: string
    message: string
    timestamp: Date
    hashtags: string[];

    constructor(json: any) {
        this.key = json.key || "";
        this.username = json.username || "";
        this.message = json.msg || "";
        this.timestamp = new Date(json.timestamp) || new Date();
        this.hashtags = json.hashtags || [];
        return this;
    }

    setKey(key: string): void {
        this.key = key;
    }

    getUsername(): string {
        return this.username;
    }

    getMessage(): string {
        return this.message;
    }

    getTimestamp(): Date {
        return this.timestamp;
    }

    getHashtags(): string[] {
        return this.hashtags;
    }

    toString(): string {
        return this.username + ": " + this.message + " @ " + this.timestamp.toLocaleString();
    }

    fromJSON(json: any): Msg {
        this.key = json.key || "";
        this.username = json.username || "";
        this.message = json.message || "";
        this.timestamp = new Date(json.timestamp) || new Date();
        this.hashtags = json.hashtags || [];
        return this;
    }

}

export default Msg;