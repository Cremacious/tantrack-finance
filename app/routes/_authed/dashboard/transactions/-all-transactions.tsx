import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { SelectContent } from '@radix-ui/react-select';
import { Link } from '@tanstack/react-router';
import { format } from 'date-fns';
import { useState } from 'react';

export const AllTransactions = ({
  month,
  year,
}: {
  month: number;
  year: number;
}) => {
  const selectedDate = new Date(year, month - 1, 1);
  const [selectedMonth, setSelectedMonth] = useState(month);
  const [selectedYear, setSelectedYear] = useState(year);

  return (
    <div>
      <Card className="mt-4">
        <CardHeader>
          <CardTitle className="flex justify-between">
            {format(selectedDate, 'MMM yyyy')} Transactions
            <div className="flex gap-1">
              <Select
                value={selectedMonth.toString()}
                onValueChange={(value) => setSelectedMonth(Number(value))}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 12 }).map((_, i) => (
                    <SelectItem key={i} value={`${i + 1}`}>
                      {format(
                        new Date(selectedDate.getFullYear(), i, 1),
                        'MMM'
                      )}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select
                value={selectedYear.toString()}
                onValueChange={(value) => setSelectedYear(Number(value))}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent></SelectContent>
              </Select>
              <Button asChild>
                <Link
                  to="/dashboard/transactions"
                  search={{
                    month: selectedMonth,
                    year: selectedYear,
                  }}
                >
                  Go
                </Link>
              </Button>
            </div>
          </CardTitle>
        </CardHeader>
      </Card>
    </div>
  );
};
