import { PageContainer } from '@/components/PageContainer/PageContainer';
import { SimpleInput } from '@/components/Input/SimpleInput';
import { Button } from '@mantine/core';
import { ButtonProgress } from '@/components/Button/ButtonProgress';
import { SimpleTable } from '@/components/Table/SimpleTable';
import { PaginationTable } from '@/components/Table/PaginationTable';
import { SimpleButton } from '@/components/Button/SimpleButton';
import { TableScrollArea } from '@/components/Table/TableScrollArea';
import { InventoryItem, PrismaClient } from "../../../../../prisma/prisma/generated/client";

type Item = {
	name: string;
	weight: number;
	unit: 'lbs' | 'kg';
};

let itemData: InventoryItem[] = [];

const newItem = async (data) => {
	'use server'
	const prismaClient = new PrismaClient();

	// TODO make a call to the Weight service to get the weight here!

	console.dir(data);

	let itemName = data.get('item');
	let unit = 'lbs';

	let result = await prismaClient.inventoryItem.create({
		data: {
			name: itemName,
			weight: 100.0,
			unit: unit,
			inventoryId: 2,
		},
	});
	itemData.push(result);
};

const getItemData = async () => {
	'use server'
	const prismaClient = new PrismaClient();
	// itemData = await prismaClient.inventoryItem.findMany();
	return await prismaClient.inventoryItem.findMany();
};

export default async function NewInventory() {
	itemData = await getItemData();

	return (
		<PageContainer title="New Inventory">
			<form action={newItem}>
				<SimpleInput name={'item'} label={'Item'} placeholder={'Bananass'} />
				<ButtonProgress type={'submit'}></ButtonProgress>
			</form>

			<form>
				<TableScrollArea data={itemData}></TableScrollArea>
				<SimpleButton color={'teal'} label={'Submit inventory!'}></SimpleButton>
			</form>
		</PageContainer>
	);
}
