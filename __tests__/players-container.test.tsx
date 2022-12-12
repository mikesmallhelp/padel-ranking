import { enableFetchMocks } from "jest-fetch-mock";
enableFetchMocks();
import { render, screen, fireEvent, within } from "@testing-library/react";
import AddPlayerContainer from "../pages/players-container";
import "@testing-library/jest-dom";
import { players } from "../lib/tests-lib/mock-data";
import { checkDashboard } from "../lib/tests-lib/common-test-utils";

jest.mock("next/router", () => require("next-router-mock"));

describe("players-container.tsx", () => {
    it("check the dashboard", () => {
        render(<AddPlayerContainer players={players} />);
        checkDashboard({dashboardTitle: "Pelaajat"});
    });

    it("check the players list", () => {
        render(<AddPlayerContainer players={players} />);

        expect(screen.getByTestId("playerListTitle").textContent).toContain("Pelaajat");
        expect(screen.getByTestId("playerListColumnTitleName").textContent).toContain("Nimi");

        ["Jarkko", "Joonas", "Mika", "Tommi", "Ville"].forEach(playerName => checkPlayer({playerName: playerName}))
    });
});

const checkPlayer = ({ playerName }: {playerName: string}) => {
    expect(screen.getByTestId("id" + playerName + "Name").textContent).toContain(playerName);
}