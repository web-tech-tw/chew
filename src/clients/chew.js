import ky from "ky"

const {
    VITE_CHEW_RECV_HOST: baseUrl,
} = import.meta.env;

const client = ky.create({
    prefixUrl: baseUrl,
});

export const useClient = () => client;
