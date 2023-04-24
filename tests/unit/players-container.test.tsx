import { enableFetchMocks } from "jest-fetch-mock";
enableFetchMocks();
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import AddPlayerContainer from "../../pages/players-container";
import "@testing-library/jest-dom";
import { players } from "../../lib/tests-lib/mock-data";
import { checkDashboard } from "../../lib/tests-lib/common-test-utils";
import { UserProvider } from '@auth0/nextjs-auth0/client';

jest.mock("next/router", () => require("next-router-mock"));
jest.mock("@auth0/nextjs-auth0/client", () => ({ UserProvider: ({ children }: { children: JSX.Element }) => (<div>{children}</div>),
                                                 useUser: () => {
                                                    return {
                                                        user: {name: "testName"},
                                                        error: null,
                                                        isLoading: false,
                                                    }
                                                  }
                                               }
));

describe("players-container.tsx", () => {
    it("check the dashboard", () => {
        render(<UserProvider><AddPlayerContainer players={players} /></UserProvider>);
        checkDashboard({ dashboardTitle: "Pelaajat" });
    });

    it("check the players list", () => {
        render(<UserProvider><AddPlayerContainer players={players} /></UserProvider>);

        expect(screen.getByTestId("playerListTitle").textContent).toContain("Pelaajat");
        expect(screen.getByTestId("playerListColumnTitleName").textContent).toContain("Nimi");

        ["Jarkko", "Joonas", "Mika", "Tommi", "Ville"].forEach(playerName => checkPlayer({ playerName: playerName }))
    });

    it("check adding a new player", async () => {
        render(<UserProvider><AddPlayerContainer players={players} /></UserProvider>);

        expect(screen.getByTestId("addPlayerTitle").textContent).toContain("Lisää pelaaja");
        expect(screen.getByTestId("playerNameTextField").textContent).toContain("Nimi");

        const playerNameInput = screen.getByTestId("playerNameTextField").querySelector("input");
        if (playerNameInput != null) {
            fireEvent.change(playerNameInput, { target: { value: "Olli" } });
        }
        fireEvent.click(screen.getByRole("button", { name: "Lisää" }));

        await waitFor(() => {
            expect(fetchMock.mock.calls.length).toEqual(1);
            expect(fetchMock.mock.calls[0][0]).toEqual("/api/add-player");
            expect(fetchMock.mock.calls[0][1]).toEqual({
                "body": "{\"name\":\"Olli\"}",
                "headers": { "Content-Type": "application/json" }, "method": "POST"
            });
        })
    });
});

const checkPlayer = ({ playerName }: { playerName: string }) => {
    expect(screen.getByTestId(playerName + "Name").textContent).toContain(playerName);
}