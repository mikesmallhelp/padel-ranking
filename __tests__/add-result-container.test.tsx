import { render, screen, fireEvent, within } from "@testing-library/react";
import AddResultContainer from "../pages/add-result-container";
import "@testing-library/jest-dom";
import { players } from '../lib/tests-lib/mock-data';
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

    it('check adding new result', () => {
        render(<AddResultContainer players={players} />);

        addSelect({buttonRoleIndex: 1, menuItemText: "Tommi"});
        addSelect({buttonRoleIndex: 2, menuItemText: "Ville"});
        addSelect({buttonRoleIndex: 3, menuItemText: "6"});

        addSelect({buttonRoleIndex: 4, menuItemText: "Jarkko"});
        addSelect({buttonRoleIndex: 5, menuItemText: "Joonas"});
        addSelect({buttonRoleIndex: 6, menuItemText: "0"});
    })
})

const addSelect = ({ buttonRoleIndex, menuItemText}: { buttonRoleIndex: number, menuItemText: string }) => {
    expect(screen.getAllByRole("button")[buttonRoleIndex].textContent).not.toEqual(menuItemText);
    fireEvent.mouseDown(screen.getAllByRole("button")[buttonRoleIndex]);
    const listbox = within(screen.getByRole("listbox"));
    fireEvent.click(listbox.getByText(menuItemText));
    expect(screen.getAllByRole("button")[buttonRoleIndex].textContent).toEqual(menuItemText);
}