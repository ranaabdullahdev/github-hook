"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGithubHook = void 0;
const useGithubHook = (token) => {
    if (!token)
        throw new Error("Token not found");
    const fetchRepos = (username) => __awaiter(void 0, void 0, void 0, function* () {
        if (!username)
            throw new Error("User name is required");
        try {
            const response = yield fetch(`https://api.github.com/users/${username}/repos`, {
                headers: {
                    Authorization: `token ${token}`,
                    Accept: "application/vnd.github.v3+json",
                },
            });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return yield response.json();
        }
        catch (error) {
            throw new Error(error.message || error.toString());
        }
    });
    const fetchRepo = (username, repo) => __awaiter(void 0, void 0, void 0, function* () {
        if (!username)
            throw new Error("User name is required");
        if (!repo)
            throw new Error("Repo name is required");
        try {
            const response = yield fetch(`https://api.github.com/repos/${username}/${repo}`, {
                headers: {
                    Authorization: `token ${token}`,
                    Accept: "application/vnd.github.v3+json",
                },
            });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = yield response.json();
            return data;
        }
        catch (error) {
            throw new Error(error.message || error.toString());
        }
    });
    const fetchRepoCommits = (username, repo) => __awaiter(void 0, void 0, void 0, function* () {
        if (!username)
            throw new Error("User name is required");
        if (!repo)
            throw new Error("Repo name is required");
        try {
            const response = yield fetch(`https://api.github.com/repos/${username}/${repo}/commits`, {
                headers: {
                    Authorization: `token ${token}`,
                    Accept: "application/vnd.github.v3+json",
                },
            });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = yield response.json();
            return data;
        }
        catch (error) {
            throw new Error(error.message || error.toString());
        }
    });
    const fetchRepoIssue = (username, repo) => __awaiter(void 0, void 0, void 0, function* () {
        if (!username)
            throw new Error("User name is required");
        if (!repo)
            throw new Error("Repo name is required");
        try {
            const response = yield fetch(`https://api.github.com/repos/${username}/${repo}/issues`, {
                headers: {
                    Authorization: `token ${token}`,
                    Accept: "application/vnd.github.v3+json",
                },
            });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = yield response.json();
            return data;
        }
        catch (error) {
            throw new Error(error.message || error.toString());
        }
    });
    return { fetchRepos, fetchRepo, fetchRepoIssue, fetchRepoCommits };
};
exports.useGithubHook = useGithubHook;
