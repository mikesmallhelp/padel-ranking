import { render, screen, fireEvent, within } from "@testing-library/react";
import AddResultContainer from "../pages/add-result-container";
import "@testing-library/jest-dom";
import { players } from '../lib/tests-lib/mock-data';
import { checkDashboard } from "../lib/tests-lib/common-test-utils";

describe('index.tsx', () => {
    it('check the add result container', () => {
        render(<AddResultContainer players={players} />);

        checkDashboard({ dashboardTitle: "Lisää tulos" });
        checkAddResultTitles();

        //expect(screen.getByRole('link', { name: 'Pelaajatx' })).toBeInTheDocument();
        expect(screen.getByTestId("playerSelectJoukkue 1Pelaaja 1")).toBeTruthy();
        expect(screen.getByTestId("playerSelectJoukkue 1Pelaaja 1").childNodes.length).toBe(4);
        //const user = userEvent.setup();
        //expect(screen.getByTestId("playerNameSelectValueJoukkue 1Pelaaja 1Jarkko").textContent).toContain("Jarkko");

        fireEvent.mouseDown(screen.getAllByRole("button")[1]);
        const listbox = within(screen.getByRole("listbox"));
        fireEvent.click(listbox.getByText(/Jarkko/i));
        expect(screen.getByTestId("playerSelectJoukkue 1Pelaaja 1")).toHaveTextContent(/Jarkko/i);
    })
})

const checkAddResultTitles = () => {
    expect(screen.getByTestId("teamResultTitleJoukkue 1").textContent).toContain("Joukkue 1");
    expect(screen.getByTestId("teamResultTitleJoukkue 2").textContent).toContain("Joukkue 2");
    
    expect(screen.getByTestId("playerSelectTitleJoukkue 1Pelaaja 1").textContent).toContain("Pelaaja 1");
    expect(screen.getByTestId("playerSelectTitleJoukkue 1Pelaaja 2").textContent).toContain("Pelaaja 2");
    expect(screen.getByTestId("playerSelectTitleJoukkue 2Pelaaja 1").textContent).toContain("Pelaaja 1");
    expect(screen.getByTestId("playerSelectTitleJoukkue 2Pelaaja 2").textContent).toContain("Pelaaja 2");

    expect(screen.getByTestId("pointsSelectTitleJoukkue 1Pisteet").textContent).toContain("Pisteet");
    expect(screen.getByTestId("pointsSelectTitleJoukkue 2Pisteet").textContent).toContain("Pisteet");
}