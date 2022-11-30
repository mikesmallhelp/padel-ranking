import { screen } from "@testing-library/react";

export const checkDashboard = ({dashboardTitle}: {dashboardTitle: string}) => {
  expect(screen.getByTestId("dashboardTitle").textContent).toContain(dashboardTitle);
  expect(screen.getByTestId("menuPadelGames").textContent).toContain("Padel-pelit");
  expect(screen.getByTestId("menuAddResult").textContent).toContain("Lisää tulos");
  expect(screen.getByTestId("menuPlayers").textContent).toContain("Pelaajat");
}