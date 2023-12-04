export type UserSearch = {
    id: string,
    name: string,
}

export const getUsersByName = (users: UserSearch[], name: string) => {
    return users.filter((user) => user.name === name);
};

export const getUserById = (users: UserSearch[], id: string) => {
    return users.find((user) => user.id === id);
};