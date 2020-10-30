export interface Sender {
    name: string,
    color: string,
};

export interface Message {
    sender: Sender,
    body: string,
    created_at: Date,
};