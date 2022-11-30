import { render, screen } from "@testing-library/react";
import AddResultContainer from "../pages/add-result-container";
import "@testing-library/jest-dom";
import { players } from '../lib/tests-lib/mock-data';
import { checkDashboard } from "../lib/tests-lib/common-test-utils";

describe('index.tsx', () => {
    it('check the add result container', () => {
        render(<AddResultContainer players={players} />);

        checkDashboard({ dashboardTitle: "Lisää tulos" });
        checkAddResultTitles();
    })
})

const checkAddResultTitles = () => {
    expect(screen.getByTestId("teamResultTitleJoukkue 1").textContent).toContain("Joukkue 1");
    expect(screen.getByTestId("teamResultTitleJoukkue 2").textContent).toContain("Joukkue 2");
    
    expect(screen.getByTestId("playerSelectTitleJoukkue 1Pelaaja1").textContent).toContain("Pelaaja 1");
    expect(screen.getByTestId("playerSelectTitleJoukkue 1Pelaaja2").textContent).toContain("Pelaaja 2");
    expect(screen.getByTestId("playerSelectTitleJoukkue 2Pelaaja1").textContent).toContain("Pelaaja 1");
    expect(screen.getByTestId("playerSelectTitleJoukkue 2Pelaaja2").textContent).toContain("Pelaaja 2");
}