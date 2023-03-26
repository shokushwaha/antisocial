import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
    const REACT_APP_CHAT_ENGINE_PROJECT_ID = "878e32c8-406f-47a8-8ddc-be8ced18a9bd";
    return (
        <div style={{ height: "100vh", width: "100vw" }}>
            <PrettyChatWindow
                projectId={REACT_APP_CHAT_ENGINE_PROJECT_ID}
                username={props.user.username}
                secret={props.user.secret}
                style={{ height: "100%" }}
            />
        </div>
    );
};

export default ChatsPage;