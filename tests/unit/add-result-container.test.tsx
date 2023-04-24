import { enableFetchMocks } from "jest-fetch-mock";
enableFetchMocks();
import { render, screen, fireEvent, within } from "@testing-library/react";
import AddResultContainer from "../../pages/add-result-container";
import "@testing-library/jest-dom";
import { players } from "../../lib/tests-lib/mock-data";
import { checkDashboard } from "../../lib/tests-lib/common-test-utils";
import { UserProvider } from "@auth0/nextjs-auth0/client";

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

describe("add-result-container.tsx", () => {
    it("check the dashboard", () => {
        render(<UserProvider><AddResultContainer players={players} /></UserProvider>);
        checkDashboard({ dashboardTitle: "Lisää tulos" });
    })

    it("check the titles", () => {
        render(<UserProvider><AddResultContainer players={players} /></UserProvider>);

        expect(screen.getByTestId("teamResultTitleJoukkue 1").textContent).toContain("Joukkue 1");
        expect(screen.getByTestId("teamResultTitleJoukkue 2").textContent).toContain("Joukkue 2");

        expect(screen.getByTestId("playerSelectTitleJoukkue 1Pelaaja 1").textContent).toContain("Pelaaja 1");
        expect(screen.getByTestId("playerSelectTitleJoukkue 1Pelaaja 2").textContent).toContain("Pelaaja 2");
        expect(screen.getByTestId("playerSelectTitleJoukkue 2Pelaaja 1").textContent).toContain("Pelaaja 1");
        expect(screen.getByTestId("playerSelectTitleJoukkue 2Pelaaja 2").textContent).toContain("Pelaaja 2");

        expect(screen.getByTestId("pointsSelectTitleJoukkue 1Pisteet").textContent).toContain("Pisteet");
        expect(screen.getByTestId("pointsSelectTitleJoukkue 2Pisteet").textContent).toContain("Pisteet");
    })

    it("check adding new result", () => {
        render(<UserProvider><AddResultContainer players={players} /></UserProvider>);

        addSelect({ buttonRoleIndex: 1, menuItemText: "Tommi" });
        addSelect({ buttonRoleIndex: 2, menuItemText: "Ville" });
        addSelect({ buttonRoleIndex: 3, menuItemText: "6" });

        addSelect({ buttonRoleIndex: 4, menuItemText: "Jarkko" });
        addSelect({ buttonRoleIndex: 5, menuItemText: "Joonas" });
        addSelect({ buttonRoleIndex: 6, menuItemText: "0" });

        fireEvent.click(screen.getByRole("button", { name: "Lisää" }));

        expect(fetchMock.mock.calls.length).toEqual(1);
        expect(fetchMock.mock.calls[0][0]).toEqual("/api/add-result");
        expect(fetchMock.mock.calls[0][1]).toEqual({
            "body": "{\"team1Result\":{\"player1Id\":\"idTommi\",\"player2Id\":\"idVille\",\"points\":6}," +
                "\"team2Result\":{\"player1Id\":\"idJarkko\",\"player2Id\":\"idJoonas\",\"points\":0}}",
            "headers": { "Content-Type": "application/json" }, "method": "POST"
        });
    })
})

const addSelect = ({ buttonRoleIndex, menuItemText }: { buttonRoleIndex: number, menuItemText: string }) => {
    fireEvent.mouseDown(screen.getAllByRole("button")[buttonRoleIndex]);
    const listbox = within(screen.getByRole("listbox"));
    fireEvent.click(listbox.getByText(menuItemText));
}