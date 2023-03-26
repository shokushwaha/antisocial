import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
    const REACT_APP_CHAT_ENGINE_PROJECT_ID = "";
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
