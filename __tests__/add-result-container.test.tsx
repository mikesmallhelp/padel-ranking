import { render, screen, fireEvent, within } from "@testing-library/react";
import AddResultContainer from "../pages/add-result-container";
import "@testing-library/jest-dom";
import { players, playersSmallSet } from '../lib/tests-lib/mock-data';
import { checkDashboard } from "../lib/tests-lib/common-test-utils";

describe('add-result-container.tsx', () => {
    it('check the dashboard', () => {
        render(<AddResultContainer players={players} />);
        checkDashboard({ dashboardTitle: "Lisää tulos" });
    })

    it('check the titles', () => {
        render(<AddResultContainer players={players} />);
        
        expect(screen.getByTestId("teamResultTitleJoukkue 1").textContent).toContain("Joukkue 1");
        expect(screen.getByTestId("teamResultTitleJoukkue 2").textContent).toContain("Joukkue 2");
        
        expect(screen.getByTestId("playerSelectTitleJoukkue 1Pelaaja 1").textContent).toContain("Pelaaja 1");
        expect(screen.getByTestId("playerSelectTitleJoukkue 1Pelaaja 2").textContent).toContain("Pelaaja 2");
        expect(screen.getByTestId("playerSelectTitleJoukkue 2Pelaaja 1").textContent).toContain("Pelaaja 1");
        expect(screen.getByTestId("playerSelectTitleJoukkue 2Pelaaja 2").textContent).toContain("Pelaaja 2");
    
        expect(screen.getByTestId("pointsSelectTitleJoukkue 1Pisteet").textContent).toContain("Pisteet");
        expect(screen.getByTestId("pointsSelectTitleJoukkue 2Pisteet").textContent).toContain("Pisteet");
    })

    it('check the player selects', () => {
        render(<AddResultContainer players={playersSmallSet} />);
        [1, 2, 4, 5].forEach(buttonRoleIndex => testPlayerSelectsForAllPlayers({ buttonRoleIndex: buttonRoleIndex }));
    })

    it('check the points selects', () => {
        render(<AddResultContainer players={players} />);
        [3, 6].forEach(buttonRoleIndex => testPointsSelectsForAllPoints({ buttonRoleIndex: buttonRoleIndex }));
    })
})

const testPlayerSelectsForAllPlayers = ({ buttonRoleIndex }: { buttonRoleIndex: number }) => {
    ["Tommi", "Ville"].forEach(playerName => testSelect({buttonRoleIndex: buttonRoleIndex, menuItemText: playerName}));
}

const testPointsSelectsForAllPoints = ({ buttonRoleIndex }: { buttonRoleIndex: number }) => {
    ["0", "1", "2", "3", "4", "5", "6"].forEach(pointsValue => testSelect({buttonRoleIndex: buttonRoleIndex, menuItemText: pointsValue}));
}

const testSelect = ({ buttonRoleIndex, menuItemText}: { buttonRoleIndex: number, menuItemText: string }) => {
    fireEvent.mouseDown(screen.getAllByRole("button")[buttonRoleIndex]);
    const listbox = within(screen.getByRole("listbox"));
    fireEvent.click(listbox.getByText(menuItemText));
    expect(screen.getAllByRole("button")[buttonRoleIndex].textContent).toEqual(menuItemText);
}