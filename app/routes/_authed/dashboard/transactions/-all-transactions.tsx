import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { format } from 'date-fns';

export const AllTransactions = ({
  month,
  year,
}: {
  month: number;
  year: number;
}) => {
  const selectedDate = new Date(year, month - 1, 1);
  return (
    <div>
      <Card className="mt-4">
        <CardHeader>
          <CardTitle>{format(selectedDate, 'MMM yyyy')} Transactions</CardTitle>
        </CardHeader>
      </Card>
    </div>
  );
};
