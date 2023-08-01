'use client';

import { Paper, Space, Stack, Title } from '@mantine/core';
import { MantineReactTable, MRT_ColumnDef } from 'mantine-react-table';
import { useMemo } from 'react';

type Person = {
	name: {
		firstName: string;
		lastName: string;
	};
	address: string;
	city: string;
	state: string;
};

type Item = {
	name: string;
	weight: number;
	unit: 'lbs' | 'kg';
};

// nested data is ok, see accessorKeys in ColumnDef below
const data: Person[] = [
	{
		name: {
			firstName: 'Zachary',
			lastName: 'Davis',
		},
		address: '261 Battle Ford',
		city: 'Columbus',
		state: 'Ohio',
	},
	{
		name: {
			firstName: 'Robert',
			lastName: 'Smith',
		},
		address: '566 Brakus Inlet',
		city: 'Westerville',
		state: 'West Virginia',
	},
	{
		name: {
			firstName: 'Kevin',
			lastName: 'Yan',
		},
		address: '7777 Kuhic Knoll',
		city: 'South Linda',
		state: 'West Virginia',
	},
	{
		name: {
			firstName: 'John',
			lastName: 'Upton',
		},
		address: '722 Emie Stream',
		city: 'Huntington',
		state: 'Washington',
	},
	{
		name: {
			firstName: 'Nathan',
			lastName: 'Harris',
		},
		address: '1 Kuhic Knoll',
		city: 'Ohiowa',
		state: 'Nebraska',
	},
];

const itemData: Item[] = [
	{
		name: 'Apples',
		weight: 10,
		unit: 'lbs'
	},
	{
		name: 'Bananas',
		weight: 12,
		unit: 'kg',
	},
	{
		name: 'Pepper',
		weight: 0.2,
		unit: 'lbs',
	},
	{
		name: 'Sale',
		weight: 0.6,
		unit: 'lbs',
	},
];

export const SimpleTable = () => {
	//should be memoized or stable
	const columns = useMemo<MRT_ColumnDef<Item>[]>(
		() => [
			{
				accessorKey: 'name', //access nested data with dot notation
				header: 'Item',
			},
			{
				accessorKey: 'weight',
				header: 'Weight',
			},
			{
				accessorKey: 'unit',
				header: 'Unit',
			},
		],
		[]
	);

	return (
		<Paper withBorder radius="md" p="md">
			<Title order={5}>Simple</Title>
			<Space h="md" />
			<MantineReactTable
				columns={columns}
				data={itemData}
				mantinePaperProps={{ shadow: '0', withBorder: false }}
			/>
		</Paper>
	);
};
