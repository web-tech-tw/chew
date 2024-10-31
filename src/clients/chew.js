import ky from "ky"

const {
    VITE_CHEW_RECV_HOST: baseUrl,
    VITE_SARA_TOKEN_NAME: tokenName,
} = import.meta.env;

const useSaraToken = (request) => {
    const tokenValue = localStorage.getItem(tokenName);
    if (!tokenValue) return;
    request.headers.set("authorization", `SARA ${tokenValue}`);
};

export const useClient = (withAuth = true) => {
    const beforeRequest = withAuth ? [useSaraToken] : [];
    return ky.create({
        prefixUrl: baseUrl,
        hooks: { beforeRequest },
    });
};
