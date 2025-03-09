import { useState } from "react";
import { Badge } from "../components/badge/badge.component";
import { Button } from "../components/button/button.component";
import { Caption } from "../components/caption.component/caption.component";
import { Input } from "../components/input/input.component";
import { Link } from "../components/link/link";
import Pagination from "../components/pagination/pagination.composant";
import { Table } from "../components/table/table.component";
import { TableSkeleton } from "../components/table/tableSkeleton";
import { cn } from "../helpers/cn.helper";
import proprietaires, { StatusLabel } from "../types/account.type";
import { Link as Links } from "react-router-dom";

function AccountPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalItems = proprietaires.length;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = proprietaires.slice(startIndex, endIndex);

  return (
    <div>
      <Caption tag="h1" text="Compte des Entreprises" type={1} />
      <div className="flex justify-between items-center mt-[15px]">
        <Input type="search" />
        <div className="flex items-center gap-[12px]">
          <Links to="create-account">
            <Button label="Ajouter une entreprise" variant="primary" />
          </Links>
          <Links to="export-data-account">
            <Button label="Exporter des donnés" variant="secondary" />
          </Links>
        </div>
      </div>
      <div className="mt-5">
        <Table.Root>
          <Table.Header>
            <Table.Row>
              <Table.Head>ID</Table.Head>
              <Table.Head>Propriétaire</Table.Head>
              <Table.Head>Télephone</Table.Head>
              <Table.Head>Entreprise</Table.Head>
              <Table.Head>Siége</Table.Head>
              <Table.Head>Status</Table.Head>
              <Table.Head>Option</Table.Head>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <TableSkeleton
              colsCount={7}
              isLoading={false}
              noData={!currentItems.length}
            >
              {currentItems.map((proprietaire) => (
                <Table.Row key={proprietaire.id}>
                  <Table.Cell>{proprietaire.id}</Table.Cell>
                  <Table.Cell>{proprietaire.nom}</Table.Cell>
                  <Table.Cell>{proprietaire.telephone}</Table.Cell>
                  <Table.Cell>{proprietaire.nomEntreprise}</Table.Cell>
                  <Table.Cell>{proprietaire.siege}</Table.Cell>
                  <Table.Cell>
                    {proprietaire.statut === "Actif" ? (
                      <Badge variant="success">
                        {StatusLabel[proprietaire.statut]}
                      </Badge>
                    ) : (
                      <Badge>{StatusLabel[proprietaire.statut]}</Badge>
                    )}
                  </Table.Cell>
                  <Table.Cell>
                    <div className="flex gap-4">
                      <Link
                        label="Détails"
                        className={cn("text-[16px] font-bold")}
                      />
                      <Link
                        label="Modifier"
                        className={cn("text-[16px] font-bold")}
                      />
                      <Link
                        label="Supprimer"
                        className={cn("text-[16px] font-bold")}
                      />
                    </div>
                  </Table.Cell>
                </Table.Row>
              ))}
            </TableSkeleton>
          </Table.Body>
        </Table.Root>
      </div>
      <div className="mt-5 flex justify-end">
        <Pagination
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}

export default AccountPage;
