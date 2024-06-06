import React, { useState } from 'react';
import SearchInput from '../common/IconSearchBox';
import { table1 } from '@/app/static data/table';

const SearchPayer = () => {
  const [searchState, setSearchState] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
      const value = e ? e.target.value : '';
      setSearchState(value);

      if (value === '') {
          setSearchResults([]);
          return;
      }

      const filteredResults = table1.filter(payer =>
          payer.payer.toLowerCase().includes(value.toLowerCase()) ||
          payer.service.toLowerCase().includes(value.toLowerCase()) 
          //payer.tags.some(tag => tag.toLowerCase().includes(value.toLowerCase()))||
      ).slice(0, 10);

      setSearchResults(filteredResults);
  };

  const renderTags = (tags) => {
    return (
        <div>
            {tags && tags.map((tag, index) => (
                <span key={index} className="bg-gray-200 rounded-full px-2 py-1 text-sm text-gray-600 mr-2">{tag}</span>
            ))}
        </div>
    );
};


  return (
      <div>
          <SearchInput
              value={searchState}
              placeholder={'Search Payer or Service'}
              onChange={handleSearch}
          />
          {searchResults.length > 0 && (
              <div className="mt-2">
                  <p className="text-sm text-gray-500">Showing {searchResults.length} results matching '{searchState}'</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
                      {searchResults.map((payer, index) => (
                          <div key={index} className="border rounded-lg p-4">
                              <p className="font-semibold">{payer.payer}</p>
                              <p className="text-sm text-gray-600">Payer</p>
                              {renderTags(payer.tags)}
                          </div>
                      ))}
                  </div>
              </div>
          )}
      </div>
  );
};

export default SearchPayer;