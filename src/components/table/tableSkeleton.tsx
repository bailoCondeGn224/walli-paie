import React from "react";
import { Table } from "./table.component";
import { Skeleton } from "../skeleton/skeleton.component";

interface TableSkeletonProps extends React.PropsWithChildren {
  noData: boolean;
  colsCount: number;
  isLoading: boolean;
  rowsCount?: number;
  emptyText?: string;
}

export function TableSkeleton({
  noData,
  children,
  colsCount,
  isLoading,
  rowsCount = 5,
  emptyText = "Aucune donnée trouvée.",
}: TableSkeletonProps) {
  const informationsBlock = noData ? (
    <Table.Row>
      <Table.Cell colSpan={colsCount} className="text-center">
        {emptyText}
      </Table.Cell>
    </Table.Row>
  ) : (
    children
  );

  return isLoading
    ? Array.from({ length: rowsCount }).map((_, index) => (
        <Table.Row key={index}>
          <Table.Cell colSpan={colsCount}>
            <Skeleton className="h-8" />
          </Table.Cell>
        </Table.Row>
      ))
    : informationsBlock;
}
